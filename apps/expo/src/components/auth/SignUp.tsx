import React, { useState } from "react"
import { View } from "react-native"

import { AnimatePresence, MotiView } from "moti"

import { Button } from "~/components"
import { useSettingsStore } from "~/stores"

import InputField from "./InputField"

type States = {
	isSignUp: boolean
	isForgotPassword: boolean
	step: number
	name: string
}

type SignUpProps = {
	step: number
	setStep: React.Dispatch<React.SetStateAction<States>>
}

function SignUp({ step, setStep }: SignUpProps) {
	const translate = useSettingsStore((state) => state.translate)
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

		console.log("submit", formData)
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
			</AnimatePresence>
			<View className="flex items-center justify-center gap-4">
				<Button
					className="w-full"
					color="primary"
					size="xl"
					label={
						step < 2
							? translate("authPage.signUp.continueButton")
							: translate("authPage.signUp.submitButton")
					}
					onPress={step < 2 ? handleContinue : handleSubmit}
				/>
			</View>
		</MotiView>
	)
}

export default SignUp
