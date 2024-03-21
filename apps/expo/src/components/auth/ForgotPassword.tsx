import { useState } from "react"
import { View } from "react-native"

import LottieView from "lottie-react-native"
import { AnimatePresence, MotiView } from "moti"

import SuccessBlue from "~/assets/lottie/success-check-blue.json"
import { Button } from "~/components"
import { Verify } from "~/components/auth"
import InputField from "~/components/auth/InputField"
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
	handleToggleForgotPassword: () => void
}

function ForgotPassword({ step, setStep, handleToggleForgotPassword }: Props) {
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
		console.log(step)

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
			// if (step === 2) return
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
						<InputField
							type="email"
							icon="email"
							placeholder="Email Address"
							error={errors.email}
							value={formData.email}
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
						<InputField
							type="password"
							icon="lock"
							placeholder={translate(
								"authPage.confirmPasswordInput",
							)}
							error={errors.confirmPassword}
							value={formData.confirmPassword}
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
							source={SuccessBlue}
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
				isLoading={isSubmiting}
				className="w-full"
				color="primary"
				size="xl"
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
				onPress={step === 3 ? handleToggleForgotPassword : handleSubmit}
			/>
		</MotiView>
	)
}

export default ForgotPassword
