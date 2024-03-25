import type { AuthUser } from "aws-amplify/auth"
import type { StateCreator } from "zustand"

import {
	confirmResetPassword,
	confirmSignUp,
	getCurrentUser,
	resendSignUpCode,
	resetPassword,
	signIn,
	signInWithRedirect,
	signOut,
	signUp,
	updatePassword,
} from "aws-amplify/auth"
import { Hub } from "aws-amplify/utils"

import type { AuthStore } from "."
import type * as API from "~/graphql/api"
import type { Result } from "~/types"

import useUserStore from "~/stores/user/useUserStore"

type HubSubscription = ReturnType<typeof Hub.listen>

type AuthState = {
	loading: boolean
	currentUser: AuthUser | null
	userInput: API.User | null
	password: string | undefined
	confirmationCodeSent: boolean
	error: unknown
}

type AuthActions = {
	handleGetCurrentUser: () => Promise<void>
	handleSignIn: (p: { username: string; password: string }) => Promise<void>
	handleSignInWithGoogle: () => Promise<void>
	handleSignOut: (p?: { global: boolean }) => Promise<void>
	handleSignUp: (p: {
		name: string
		userType: API.UserType
		username: string
		password: string
	}) => Promise<void>
	handleConfirmSignUp: (p: {
		username: string
		confirmationCode: string
	}) => Promise<void>
	handleResendSignUpCode: (p: { username: string }) => Promise<void>
	handleUpdatePassword: (p: {
		oldPassword: string
		newPassword: string
	}) => Promise<void>
	handleResetPassword: (p: { username: string }) => Promise<void>
	handleConfirmResetPassword: (p: {
		username: string
		confirmationCode: string
		newPassword: string
	}) => Promise<Result<boolean>>
	destroy: () => void
}

export type AuthSlice = AuthState & AuthActions

const createAuthSlice: StateCreator<AuthStore, [], [], AuthSlice> = (
	set,
	get,
) => {
	let authHubSubscription: HubSubscription | null = null

	const handleHubSubscriptions = () => {
		const authHubSubscription = Hub.listen(
			"auth",
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			async ({ payload: { event, message } }) => {
				switch (event) {
					case "signedIn":
					case "tokenRefresh":
					case "signInWithRedirect":
						await get().handleGetCurrentUser()
						break
					case "signedOut":
						useUserStore.getState().clearCurrentUser()
						break
					case "tokenRefresh_failure":
					case "signInWithRedirect_failure":
					case "customOAuthState":
						console.error(event, message)
						break
				}
			},
		)

		return authHubSubscription
	}

	void handleHubSubscriptions()

	return {
		loading: false,
		currentUser: null,
		userInput: null,
		password: undefined,
		confirmationCodeSent: false,
		error: null,

		handleGetCurrentUser: async (): Promise<void> => {
			if (get().loading) return

			set({ loading: true, error: null })

			try {
				const currentUser = await getCurrentUser()

				await useUserStore.getState().setCurrentUser(currentUser.userId)

				set({ loading: false, currentUser: currentUser })
			} catch (error) {
				set({ loading: false, error })
			}
		},

		handleSignIn: async (p): Promise<void> => {
			if (get().loading) return

			set({ loading: true, error: null })

			try {
				const { isSignedIn, nextStep } = await signIn(p)
				let currentUser: AuthUser | null = null

				if (!isSignedIn) {
					currentUser = null
				}

				switch (nextStep.signInStep) {
					case "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE":
					case "CONFIRM_SIGN_IN_WITH_SMS_CODE":
					case "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED":
					case "CONFIRM_SIGN_IN_WITH_TOTP_CODE":
					case "CONFIRM_SIGN_UP":
					case "CONTINUE_SIGN_IN_WITH_MFA_SELECTION":
					case "CONTINUE_SIGN_IN_WITH_TOTP_SETUP":
					case "RESET_PASSWORD":
						currentUser = null
						break
					case "DONE":
						currentUser = await getCurrentUser()
				}

				set({ loading: false, currentUser: currentUser })
			} catch (error) {
				console.error("error signing in", error)
			}
		},

		handleSignInWithGoogle: async (): Promise<void> => {
			if (get().loading) return

			set({ loading: true, error: null })

			try {
				await signInWithRedirect({ provider: "Google" })
			} catch (error) {
				set({ error })
			}
		},

		handleSignOut: async (p?: { global: boolean }): Promise<void> => {
			if (get().loading) return

			set({ loading: true, error: null })

			try {
				await signOut(p)

				set({ loading: false, currentUser: null })
			} catch (error) {
				set({ loading: false, error })
			}
		},

		handleSignUp: async (p): Promise<void> => {
			if (get().loading) return

			set({ loading: true, error: null })

			const { name, username, password, userType } = p

			try {
				const { isSignUpComplete, nextStep } = await signUp({
					username,
					password,
					options: {
						userAttributes: {
							name,
							"custom:user_type": userType,
						},
					},
				})

				if (isSignUpComplete) {
					set({ loading: false })
				}

				switch (nextStep.signUpStep) {
					case "COMPLETE_AUTO_SIGN_IN":
					case "CONFIRM_SIGN_UP":
					case "DONE":
						set({ loading: false })
						break
				}

				set({ loading: false })
			} catch (error) {
				set({ loading: false, error })

				console.error("error signing up", error)
			}
		},

		handleConfirmSignUp: async (p): Promise<void> => {
			if (get().loading) return

			set({ loading: true, error: null })

			try {
				const { isSignUpComplete, nextStep } = await confirmSignUp(p)

				if (!isSignUpComplete) {
					set({ loading: false })
				}

				switch (nextStep.signUpStep) {
					case "COMPLETE_AUTO_SIGN_IN":
					case "CONFIRM_SIGN_UP":
					case "DONE":
						set({ loading: false })
				}
			} catch (error) {
				console.error("error confirming signup", error)
				set({ loading: false, error })
			}
		},

		handleResendSignUpCode: async (p): Promise<void> => {
			if (get().loading) return

			set({ loading: true, error: null })

			try {
				await resendSignUpCode(p)

				set({ loading: false, confirmationCodeSent: true })
			} catch (error) {
				set({ loading: false, error })
			}
		},

		handleResetPassword: async (p) => {
			if (get().loading) return

			set({ loading: true, error: null })

			try {
				const { isPasswordReset, nextStep } = await resetPassword(p)

				if (!isPasswordReset) {
					return
				}

				switch (nextStep.resetPasswordStep) {
					case "CONFIRM_RESET_PASSWORD_WITH_CODE":
					case "DONE":
						break
				}
			} catch (error) {
				console.error("error resetting password", error)
			}
		},

		handleConfirmResetPassword: async (p): Promise<Result<boolean>> => {
			if (get().loading) return { onSuccess: false }

			set({ loading: true, error: null })

			try {
				await confirmResetPassword(p)

				set({ loading: false })

				return { onSuccess: true }
			} catch (error) {
				set({ loading: false, error })

				return { onSuccess: false }
			}
		},

		handleUpdatePassword: async (p): Promise<void> => {
			if (get().loading) return

			set({ loading: true, error: null })

			try {
				await updatePassword(p)

				set({ loading: false })
			} catch (error) {
				set({ loading: false, error })
			}
		},

		destroy: (): void => {
			if (authHubSubscription) {
				authHubSubscription()
				authHubSubscription = null
			}
		},
	}
}

export default createAuthSlice
