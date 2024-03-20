import { useState } from "react"
import { View } from "react-native"

import { AnimatePresence, MotiView } from "moti"

import { Button } from "~/components"

import InputField from "./InputField"

type States = {
	isSignUp: boolean
	isForgotPassword: boolean
	step: number
	name: string
}

type ForgotPasswordProps = {
	step: number
	setStep: React.Dispatch<React.SetStateAction<States>>
}

function ForgotPassword({ step, setStep }: ForgotPasswordProps) {
	const [formData, setFormData] = useState({
		email: "",
	})
	const [errors, setErrors] = useState({
		email: "",
	})

	const handleSubmit = () => {
		const { email } = formData
		const newErrors = {
			email: email ? "" : "Email is required",
		}
		setErrors(newErrors)

		if (Object.values(newErrors).some((error) => error !== "")) {
			return
		}

		console.log("submit", formData)
	}

	const handleContinue = () => {
		const { email } = formData
		const newErrors = {
			email: !email ? "Email is required" : "",
		}
		setErrors(newErrors)

		if (Object.values(newErrors).some((error) => error !== "")) {
			return
		}
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
			</AnimatePresence>
			<View className="flex items-center justify-center gap-4">
				<Button
					className="w-full"
					color="primary"
					size="xl"
					label={step === 0 ? "Submit" : "Return to Sign In"}
					onPress={step === 0 ? handleContinue : handleSubmit}
				/>
			</View>
		</MotiView>
	)
}

export default ForgotPassword
