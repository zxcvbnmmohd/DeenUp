import { useState } from "react"

import LottieView from "lottie-react-native"
import { AnimatePresence, MotiView } from "moti"

import { lottieBlueCheck } from "~/assets"
import { Verify } from "~/components/auth"
import {
	Button,
	EmailInputField,
	NameInputField,
	PasswordInputField,
} from "~/components/ui"
import { useAuthStore, useSettingsStore } from "~/stores"

export enum UserType {
	ADMIN = "ADMIN",
	PLAYER = "PLAYER",
}

type States = {
	isSignUp: boolean
	isForgotPassword: boolean
	step: number
}

type Props = {
	step: number
	setStep: React.Dispatch<React.SetStateAction<States>>
	handleToggleSignUp: () => void
}

const SignUp = ({ step, setStep, handleToggleSignUp }: Props) => {
	const translate = useSettingsStore((state) => state.translate)
	const {
		email,
		name,
		password,
		setUserName,
		setUserEmail,
		setUserPassword,
		handleSignUp,
	} = useAuthStore((state) => ({
		setUserName: state.setUserName,
		setUserEmail: state.setUserEmail,
		setUserPassword: state.setUserPassword,
		handleSignUp: state.handleSignUp,
		email: state.email,
		name: state.name,
		password: state.password,
	}))

	const [code, setCode] = useState("")
	const [codeError, setCodeError] = useState("")

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
	})

	const handleSubmit = async () => {
		const newErrors = {
			name: name ? "" : translate("authPage.alerts.nameRequired"),
			email: email ? "" : translate("authPage.alerts.emailRequired"),
			password: password
				? ""
				: translate("authPage.alerts.passwordRequired"),
		}

		setErrors(newErrors)

		if (Object.values(newErrors).some((error) => error !== "")) {
			return
		}
		if (step === 2) {
			console.debug("signingup")
			await handleSignUp({
				username: email,
				password: password,
				name: name,
				userType: "PLAYER" as UserType,
			})
				.then((res: unknown) => {
					console.debug(res)
					setStep((prevState) => ({
						...prevState,
						step: prevState.step + 1,
					}))
				})
				.catch((err: unknown) => {
					console.error(err)
				})
		}
	}

	const handleVerifySubmit = () => {
		if (code.length !== 6) {
			setCodeError("Code must be 6 digits")

			return
		}

		setStep((prevState) => ({
			...prevState,
			step: prevState.step + 1,
		}))
	}

	const handleContinue = () => {
		const newErrors = {
			name: step === 0 && !name ? "Name is required" : "",
			email: step === 1 && !email ? "Email is required" : "",
			password: step === 2 && !password ? "Password is required" : "",
		}

		setErrors(newErrors)

		if (Object.values(newErrors).some((error) => error !== "")) {
			return
		}

		setStep((prevState) => ({
			...prevState,
			step: prevState.step + 1,
		}))
	}

	const handleInputChange = (field: string, value: string) => {
		if (value === "Enter") handleContinue()
		switch (field) {
			case "name":
				setUserName(value)
				break
			case "email":
				setUserEmail(value)
				break
			case "password":
				setUserPassword(value)
				break
			default:
				break
		}
	}

	return (
		<MotiView
			key="signup"
			from={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			delay={700}
			style={{
				gap: 150,
				width: "100%",
				flex: 1,
				justifyContent: "space-between",
				paddingBottom: 10,
			}}
		>
			<AnimatePresence>
				{step === 0 && (
					<MotiView
						key="nameField"
						from={{ opacity: 0, translateY: -20 }}
						animate={{ opacity: 1, translateY: 0 }}
					>
						<NameInputField
							error={errors.name}
							value={name}
							onChangeText={(value) =>
								handleInputChange("name", value)
							}
						/>
					</MotiView>
				)}
				{step === 1 && (
					<MotiView
						key="emailField"
						from={{ opacity: 0, translateY: -20 }}
						animate={{ opacity: 1, translateY: 0 }}
					>
						<EmailInputField
							error={errors.email}
							value={email}
							onChangeText={(value) =>
								handleInputChange("email", value)
							}
						/>
					</MotiView>
				)}
				{step === 2 && (
					<MotiView
						key="passwordField"
						from={{ opacity: 0, translateY: -20 }}
						animate={{ opacity: 1, translateY: 0 }}
					>
						<PasswordInputField
							error={errors.password}
							value={password}
							onChangeText={(value) =>
								handleInputChange("password", value)
							}
						/>
					</MotiView>
				)}
				{step === 3 && (
					<MotiView
						key="verification"
						from={{ opacity: 0, translateY: -20 }}
						animate={{ opacity: 1, translateY: 0 }}
					>
						<Verify
							error={codeError}
							setCode={setCode}
							key="verify"
						/>
					</MotiView>
				)}
				{step === 4 && (
					<MotiView
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
						}}
						key="verify"
					>
						<LottieView
							source={lottieBlueCheck}
							loop={false}
							autoPlay
							style={{
								width: 300,
								height: 500,
							}}
						/>
					</MotiView>
				)}
			</AnimatePresence>

			<Button
				buttonStyle="w-full"
				color="primary"
				size="xl"
				label={
					step < 2
						? translate("authPage.signUp.continueButton")
						: step === 2
							? translate("authPage.signUp.submitButton")
							: step === 3
								? translate("authPage.signUp.verifyButton")
								: translate("authPage.signUp.backToSignIn")
				}
				onPress={
					step === 2
						? handleSubmit
						: step === 3
							? handleVerifySubmit
							: step === 4
								? handleToggleSignUp
								: handleContinue
				}
			/>
		</MotiView>
	)
}

export default SignUp
