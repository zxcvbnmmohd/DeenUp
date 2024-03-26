import { Text, TouchableOpacity, View } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"

import { SegmentedProgressBar } from "~/components/ui"
import { useAuthStore, useSettingsStore } from "~/stores"

type Step = {
	header: string
	subheader: string
}

type Props = {
	step: number
	handleBack: () => void
	handleToggle: () => void
	isSignUp: boolean
}

const signUpSteps: Record<number, Step> = {
	0: {
		header: "authPage.signUp.nameHeader",
		subheader: "authPage.signUp.nameSubheader",
	},
	1: {
		header: "authPage.signUp.emailHeader",
		subheader: "authPage.signUp.emailSubheader",
	},
	2: {
		header: "authPage.signUp.passwordHeader",
		subheader: "authPage.signUp.passwordSubheader",
	},
	3: {
		header: "authPage.verify.header",
		subheader: "authPage.verify.subheader",
	},
	4: {
		header: "authPage.signUp.successHeader",
		subheader: "authPage.signUp.successSubheader",
	},
}

const forgotPasswordSteps: Record<number, Step> = {
	0: {
		header: "authPage.forgotPassword.header",
		subheader: "authPage.forgotPassword.subheader",
	},
	1: {
		header: "authPage.verify.header",
		subheader: "authPage.verify.subheader",
	},
	2: {
		header: "authPage.forgotPassword.passwordHeader",
		subheader: "authPage.forgotPassword.passwordSubheader",
	},
	3: {
		header: "authPage.forgotPassword.successHeader",
		subheader: "authPage.forgotPassword.successSubheader",
	},
}

const AuthHeader = ({ step, handleBack, handleToggle, isSignUp }: Props) => {
	const translate = useSettingsStore((state) => state.translate)
	const { name, email } = useAuthStore()
	const steps = isSignUp ? signUpSteps : forgotPasswordSteps
	const currentStep = steps[step]!

	const styles = {
		body: "flex w-full gap-6",
		backButton: "size-10",
		buttonsContainer: "flex flex-row justify-between",
		textContainer: "",
		headerText: "text-4xl font-extrabold",
		subheaderText: "text-gray-500",
	}

	return (
		<View className={styles.body}>
			<View className={styles.buttonsContainer}>
				<TouchableOpacity
					className={styles.backButton}
					onPress={step === 0 ? handleToggle : handleBack}
				>
					<MaterialCommunityIcons
						name="chevron-left"
						color={"black"}
						size={31}
					/>
				</TouchableOpacity>
			</View>
			<SegmentedProgressBar
				progress={step / (isSignUp ? 4 : 3)}
				segments={isSignUp ? 4 : 3}
				color="#007EBD"
				backgroundColor="gray"
			/>
			<View className={styles.textContainer}>
				<Text className={styles.headerText}>
					{translate(currentStep.header)}
				</Text>
				<Text className={styles.subheaderText}>
					{step === 1 && isSignUp
						? translate(currentStep.subheader, { name })
						: step === 3 && isSignUp
							? translate(currentStep.subheader, { email })
							: translate(currentStep.subheader)}
				</Text>
			</View>
		</View>
	)
}

export default AuthHeader
