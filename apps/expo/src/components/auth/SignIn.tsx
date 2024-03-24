import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { MotiView } from "moti"

import { Button, EmailInputField, PasswordInputField } from "~/components/ui"
import { useSettingsStore } from "~/stores"

type Props = {
	handleToggleSignUp: () => void
	onBackPress: () => void
}

const SignIn = ({ handleToggleSignUp, onBackPress }: Props) => {
	const translate = useSettingsStore((state) => state.translate)
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	})

	const styles = {
		footer: "flex h-8 w-full flex-row items-center justify-center gap-1",
		signUpText: "font-bold text-primary",
	}

	const handleSubmit = () => {
		const { email, password } = formData
		const newErrors = {
			email: email ? "" : translate("authPage.alerts.emailRequired"),
			password: password
				? ""
				: translate("authPage.alerts.passwordRequired"),
		}
		setErrors(newErrors)

		if (Object.values(newErrors).some((error) => error !== "")) {
			return
		}
	}

	const handleInputChange = (field: string, value: string) => {
		if (field === "password" && value === "Enter") {
			handleSubmit()

			return
		}

		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}))
	}

	return (
		<MotiView
			key="signin"
			animate={{ opacity: 1 }}
			exit={{
				opacity: 0,
			}}
			from={{ opacity: 0 }}
			delay={500}
			exitTransition={{ delay: 0 }}
			style={{ width: "100%", gap: 10 }}
		>
			<View className="gap-8">
				<EmailInputField
					value={formData.email}
					error={errors.email}
					onChangeText={(value) => handleInputChange("email", value)}
				/>
				<PasswordInputField
					value={formData.password}
					error={errors.password}
					onChangeText={(value) =>
						handleInputChange("password", value)
					}
				/>
			</View>

			<Button
				buttonStyle=""
				color="link"
				size="md"
				label={translate("authPage.signIn.forgotPassword")}
				onPress={onBackPress}
			/>
			<Button
				buttonStyle="w-full"
				color="primary"
				size="xl"
				label={"Sign In"}
				onPress={handleSubmit}
			/>
			<View className={styles.footer}>
				<Text>{translate("authPage.signIn.noAccount")}</Text>
				<TouchableOpacity onPress={handleToggleSignUp}>
					<Text className={styles.signUpText}>
						{translate("authPage.signIn.signUp")}
					</Text>
				</TouchableOpacity>
			</View>
		</MotiView>
	)
}

export default SignIn
