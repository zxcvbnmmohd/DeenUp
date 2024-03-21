import { useState } from "react"
import { Text, View } from "react-native"

import InputField from "~components/auth/InputField"
import LottieView from "lottie-react-native"
import { AnimatePresence, MotiView } from "moti"

import SuccessBlue from "~/assets/lottie/success-check-blue.json"
import { Button } from "~/components"
import Verify from "~/components/auth/Verify"
import { useSettingsStore } from "~/stores"

type States = {
	isSignUp: boolean
	isForgotPassword: boolean
	step: number
	name: string
}

type Props = {
	step: number
	setStep: React.Dispatch<React.SetStateAction<States>>
	handleToggleSignUp: () => void
}

function SignUp({ step, setStep, handleToggleSignUp }: Props) {
	const translate = useSettingsStore((state) => state.translate)
	const [code, setCode] = useState("")
	const [codeError, setCodeError] = useState("")
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	})
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
	})

	const handleSubmit = () => {
		const { name, email, password } = formData

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
		setStep((prevState) => ({
			...prevState,
			step: prevState.step + 1,
		}))
	}
	const handleVerifySubmit = () => {
		if (code.length !== 6) {
			setCodeError("Code must be 6 digits")

			return
		}

		console.log("submit", formData)
		setStep((prevState) => ({
			...prevState,
			step: prevState.step + 1,
		}))
	}

	const handleContinue = () => {
		const { name, email, password } = formData
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
			name: name,
			step: prevState.step + 1,
		}))
	}

	const handleInputChange = (field: string, value: string) => {
		if (value === "Enter") handleContinue()
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}))
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
						<InputField
							type="name"
							icon="face-man-profile"
							placeholder={translate("authPage.nameInput")}
							error={errors.name}
							value={formData.name}
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
						<InputField
							type="email"
							icon="email"
							placeholder={translate("authPage.emailInput")}
							error={errors.email}
							value={formData.email}
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
						<InputField
							type="password"
							icon="lock"
							placeholder={translate("authPage.passwordInput")}
							error={errors.password}
							value={formData.password}
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
							source={SuccessBlue}
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
				className="w-full"
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
					step === 3
						? handleVerifySubmit
						: step === 2
							? handleSubmit
							: step === 4
								? handleToggleSignUp
								: handleContinue
				}
			/>
		</MotiView>
	)
}

export default SignUp
