import { useState } from "react"
import { Text, View } from "react-native"

import { StatusBar } from "expo-status-bar"

import LottieView from "lottie-react-native"

import { lottieBlueCheck } from "~/assets/"
import { Verify } from "~/components/auth/"
import { Button } from "~/components/ui"
import { useAuthStore, useSettingsStore } from "~/stores"

export default function Auth() {
	const translate = useSettingsStore((state) => state.translate)

	const { email, loading } = useAuthStore()

	const [isVerified, setVerified] = useState(false)
	const [error, setError] = useState<string>("")
	const [code, setCode] = useState("")
	const styles = {
		body: "w-full h-full gap-6 justify-start items-center flex-col bg-base-200 p-6 pt-24",
		headerContainer: "items-center justify-center gap-4",
		header: "text-4xl font-bold",
		subheader: "text-lg font-light text-gray-500",
		logo: "text-base-100 text-2xl font-bold",
		closeButton: "size-10 absolute top-5 right-5",
		submitButton: "absolute bottom-12 w-11/12",
	}

	const handleVerifySubmit = () => {
		if (code === "" || code.length < 6) {
			setError("Please fill in all verification fields.")

			return
		}
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
							email: email,
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
					label={translate("authPage.verify.submitButton")}
					color="primary"
					size="xl"
					buttonStyle={styles.submitButton}
					onPress={() => handleVerifySubmit()}
					isLoading={loading}
				/>
			</View>
		</>
	)
}
