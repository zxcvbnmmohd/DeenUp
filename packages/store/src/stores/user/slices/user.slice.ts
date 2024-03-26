import type { StateCreator } from "zustand"

import type { UserStore } from "."
import type { UpdateUserInput, User } from "../../../graphql/api"
import type { Result } from "../../../types"

import { UserApi } from "../../../apis"

type UserState = {
	currentUser: User | null
	loadingUser: boolean
	errorUser: unknown
}

type UserActions = {
	setCurrentUser: (userId: string) => Promise<void>
	clearCurrentUser: () => void
	updateCurrentUser: (
		user: UpdateUserInput,
		selfie?: File,
	) => Promise<Result<User>>
}

export type UserSlice = UserState & UserActions

const createUserSlice: StateCreator<UserStore, [], [], UserSlice> = (set) => {
	return {
		currentUser: null,
		loadingUser: false,
		errorUser: null,
		setCurrentUser: async (userId: string): Promise<void> => {
			set({ loadingUser: true, errorUser: null })

			try {
				const currentUser = await UserApi.read(userId)

				set((state: UserState) => ({
					...state,
					currentUser,

					loadingUser: false,
				}))
			} catch (error) {
				set({ loadingUser: false, errorUser: error })
			}
		},
		clearCurrentUser: (): void => {
			set((state: UserState) => ({
				...state,
				currentUser: null,
			}))
		},
		updateCurrentUser: async (
			user: UpdateUserInput,
			selfie?: File,
		): Promise<Result<User>> => {
			set({ loadingUser: true, errorUser: null })

			try {
				const updatedUser = await UserApi.update(user, selfie)

				set((state: UserState) => ({
					...state,
					currentUser: updatedUser,
					loadingUser: false,
				}))

				return { onSuccess: updatedUser }
			} catch (errorUser) {
				set({ loadingUser: false, errorUser })

				return { onFailure: "Failed to update user" }
			}
		},
	}
}

export default createUserSlice
