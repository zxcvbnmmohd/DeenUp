import { useState } from "react"
import { Text, View } from "react-native"

import { StatusBar } from "expo-status-bar"

import LottieView from "lottie-react-native"

import { lottieBlueCheck } from "~/assets/index"
import { Button } from "~/components"
import { Verify } from "~/components/auth/"
import { useSettingsStore } from "~/stores"

export default function Auth() {
	const translate = useSettingsStore((state) => state.translate)
	const [isSubmiting, setSubmitting] = useState(false)
	const [isVerified, setVerified] = useState(false)
	const [error, setError] = useState<string>("")
	const [code, setCode] = useState("")

	const handleVerifySubmit = () => {
		if (code === "" || code.length < 6) {
			setError("Please fill in all verification fields.")

			return
		}

		setSubmitting(true)

		setTimeout(() => {
			setSubmitting(false)
			setError("")
			setVerified(true)
		}, 5000)
	}

	const styles = {
		body: "w-full h-full gap-2 justify-start items-center flex-col bg-base-200 p-6 pt-24",
		headerContainer: "items-center justify-center ",
		header: "text-4xl font-bold",
		subheader: "text-lg font-light text-gray-500",
		logo: "text-base-100 text-2xl font-bold",
		closeButton: "size-10 absolute top-5 right-5",
		submitButton: "absolute bottom-12 w-11/12",
	}

	return (
		<>
			<StatusBar style="light" />
			<View className={styles.body}>
				<View className={styles.headerContainer}>
					<Text className={styles.header}>
						{translate("authPage.verify.header")}
					</Text>
					<Text className={styles.subheader}>
						{translate("authPage.verify.subheader", {
							email: "your@email.com",
						})}
					</Text>
				</View>
				{isVerified ? (
					<LottieView
						source={lottieBlueCheck}
						loop={false}
						autoPlay
						style={{
							width: 300,
							height: 500,
						}}
					/>
				) : (
					<Verify setCode={setCode} error={error} />
				)}

				<Button
					label={isVerified ? "Continue" : "Verify"}
					color="primary"
					size="xl"
					className={styles.submitButton}
					onPress={() => handleVerifySubmit()}
					isLoading={isSubmiting}
				/>
			</View>
		</>
	)
}
