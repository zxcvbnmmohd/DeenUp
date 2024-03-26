import type { Dispatch, SetStateAction } from "react"

import { useState } from "react"

import LottieView from "lottie-react-native"
import { AnimatePresence, MotiView } from "moti"

import { lottieBlueCheck } from "~/assets"
import { Verify } from "~/components/auth"
import { Button, EmailInputField, PasswordInputField } from "~/components/ui"
import { useAuthStore, useSettingsStore } from "~/stores"

type Props = {
	step: number
	setStep: Dispatch<SetStateAction<States>>
	onBackPress: () => void
}

type States = {
	isSignUp: boolean
	isForgotPassword: boolean
	step: number
}

const ForgotPassword = ({ step, setStep, onBackPress }: Props) => {
	const translate = useSettingsStore((state) => state.translate)
	const [code, setCode] = useState("")
	const [isSubmiting, setSubmitting] = useState(false)
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	})

	const [errors, setErrors] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		code: "",
	})

	const handleSubmit = () => {
		const { email, password, confirmPassword } = formData

		const newErrors = {
			email: step === 0 && !email ? "Email is required" : "",
			code: step === 1 && !code ? "Code is required" : "",
			password: step === 2 && !password ? "Password is required" : "",
			confirmPassword:
				step === 2 && (!confirmPassword || password !== confirmPassword)
					? "Passwords do not match"
					: "",
		}

		setErrors(newErrors)

		if (Object.values(newErrors).some((error) => error !== "")) {
			return
		}

		setSubmitting(true)
		setTimeout(() => {
			setStep((prevState) => ({
				...prevState,
				step: prevState.step + 1,
			}))

			setSubmitting(false)
		}, 1000)
	}

	const handleInputChange = (field: string, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}))
	}

	return (
		<MotiView
			key="forgotPassword"
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
						key="emailField"
						from={{ opacity: 0, translateY: -20 }}
						animate={{ opacity: 1, translateY: 0 }}
					>
						<EmailInputField
							value={formData.email}
							error={errors.email}
							onChangeText={(value) =>
								handleInputChange("email", value)
							}
						/>
					</MotiView>
				)}
				{step === 1 && (
					<MotiView
						key="verify"
						from={{ opacity: 0, translateY: -20 }}
						animate={{ opacity: 1, translateY: 0 }}
					>
						<Verify error={errors.code} setCode={setCode} />
					</MotiView>
				)}
				{step === 2 && (
					<MotiView
						key="passwordField"
						from={{ opacity: 0, translateY: -20 }}
						animate={{ opacity: 1, translateY: 0 }}
						style={{ gap: 32 }}
					>
						<PasswordInputField
							value={formData.password}
							error={errors.password}
							onChangeText={(value) =>
								handleInputChange("password", value)
							}
						/>
						<PasswordInputField
							value={formData.confirmPassword}
							error={errors.confirmPassword}
							onChangeText={(value) =>
								handleInputChange("confirmPassword", value)
							}
						/>
					</MotiView>
				)}
				{step === 3 && (
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
								width: 500,
								height: 250,
								aspectRatio: "auto",
							}}
						/>
					</MotiView>
				)}
			</AnimatePresence>

			<Button
				buttonStyle="w-full"
				color="primary"
				size="xl"
				isLoading={isSubmiting}
				label={
					step === 0
						? translate("authPage.forgotPassword.requestReset")
						: step === 1
							? translate("authPage.verify.submitButton")
							: step === 2
								? translate(
										"authPage.forgotPassword.submitButton",
									)
								: translate(
										"authPage.forgotPassword.backToSignIn",
									)
				}
				onPress={step === 3 ? onBackPress : handleSubmit}
			/>
		</MotiView>
	)
}

export default ForgotPassword
