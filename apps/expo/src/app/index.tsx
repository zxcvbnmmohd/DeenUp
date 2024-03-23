import type { ReactNode } from "react"

import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"

import { MotiView } from "moti"

import { Button, Spacer } from "~/components/ui"

export default function Page(): ReactNode {
	const motiStyles = StyleSheet.create({
		logo: {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			fontSize: 96.0,
			fontWeight: "bold",
		},
		container: {
			width: "100%",
			gap: 10,
			justifyContent: "flex-end",
		},
	})
	const styles = {
		body: "flex h-full flex-col p-4",
		logoContainer: "items-center",
		logo: "text-8xl font-bold",
		logoPrimary: "text-8xl font-bold text-primary",
		buttonsContainer:
			"flex flex-row gap-2 items-center w-full justify-center px-1",
		joinGameButton: "rounded-r-none w-1/2",
		createGameButton: "border-base-300 rounded-l-none w-1/2",
	}

	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<View className={styles.body}>
				<Spacer />
				<View className={styles.logoContainer}>
					<Text className={styles.logo}>
						Deen
						<MotiView
							style={motiStyles.logo}
							from={{ opacity: 0, translateY: 200, scale: 0.5 }}
							animate={{ opacity: 1, translateY: 0, scale: 1 }}
							transition={{
								type: "timing",
								duration: 350,
								scale: { type: "spring", delay: 350 },
							}}
						>
							<Text className={styles.logoPrimary}>Up!</Text>
						</MotiView>
					</Text>
				</View>
				<Spacer />
				<MotiView
					from={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					style={motiStyles.container}
					transition={{ type: "timing", delay: 500 }}
				>
					<Button
						color="primary"
						size="xl"
						label="verify"
						onPress={() => {
							router.push("/(auth)/verification")
						}}
					/>
					<Button
						color="primary"
						size="xl"
						label="signin"
						onPress={() => {
							router.push("/(auth)")
						}}
					/>
					<View className={styles.buttonsContainer}>
						<Button
							color="primary"
							size="xl"
							label="Join Game"
							onPress={() => router.push("/join-game")}
							buttonStyle={styles.joinGameButton}
						/>
						<Button
							color="primary"
							size="xl"
							label="Create Game"
							onPress={() => router.push("/create-game")}
							buttonStyle={styles.createGameButton}
						/>
					</View>
					<Button
						color="primary"
						size="xl"
						label="Solo Mode"
						onPress={() => {
							router.push("/solo-mode")
						}}
					/>
				</MotiView>
			</View>
		</SafeAreaView>
	)
}
