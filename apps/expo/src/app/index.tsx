import type { ReactNode } from "react"

import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"

import { MotiView } from "moti"

import { Button } from "~/components"
import FriendsModeOptions from "~/components/FriendsModeOptions"
import { Modal } from "~/components/Modal"

export default function Page(): ReactNode {
	const [isModalOpen, setModalOpen] = useState(false)
	const motiStyles = StyleSheet.create({
		logo: {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			flexGrow: 1,
			textAlign: "center",
			fontSize: 96.0,
			fontWeight: "bold",
		},
		container: {
			flex: 1,
			width: "100%",
			gap: 10,
			justifyContent: "flex-end",
			height: "auto",
		},
	})
	const styles = {
		body: "flex h-full flex-col justify-around p-4",
		logoContainer: "flex-1 items-center justify-center",
		logo: "text-8xl font-bold",
		logoPrimary: "text-8xl font-bold text-primary",
	}

	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<Modal setModalOpen={setModalOpen} isOpen={isModalOpen}>
				<FriendsModeOptions setModalOpen={setModalOpen} />
			</Modal>
			<View className={styles.body}>
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

				<MotiView
					from={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					style={motiStyles.container}
					transition={{ type: "timing", delay: 500 }}
				>
					<Button
						color="primary"
						size="xl"
						label="Friends Mode"
						onPress={() => setModalOpen(true)}
					/>
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
