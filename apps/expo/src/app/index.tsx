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
	const styles = StyleSheet.create({
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

	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<Modal setModalOpen={setModalOpen} isOpen={isModalOpen}>
				<FriendsModeOptions setModalOpen={setModalOpen} />
			</Modal>
			<View className="flex h-full flex-col justify-around p-4">
				<View className="flex-1 items-center justify-center">
					<Text className="text-8xl font-bold">
						Deen
						<MotiView
							style={styles.logo}
							from={{ opacity: 0, translateY: 200, scale: 0.5 }}
							animate={{ opacity: 1, translateY: 0, scale: 1 }}
							transition={{
								type: "timing",
								duration: 350,
								scale: { type: "spring", delay: 350 },
							}}
						>
							<Text className="text-8xl font-bold text-violet-700">
								Up!
							</Text>
						</MotiView>
					</Text>
				</View>

				<MotiView
					from={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					style={styles.container}
					transition={{ type: "timing", delay: 500 }}
				>
					<Button
						label="Friends Mode"
						onPress={() => setModalOpen(true)}
					/>
					<Button
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
