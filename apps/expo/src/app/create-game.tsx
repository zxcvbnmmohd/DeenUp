import type { ReactNode } from "react"

import { useEffect } from "react"
import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"

import { MaterialCommunityIcons } from "@expo/vector-icons"

import type { GameStore } from "~/stores"

import { Button } from "~/components"
import { useGameStore } from "~/stores"

export default function CreateGame(): ReactNode {
	const code = useGameStore((state: GameStore) => state.lobbyCode)
	const createLobby = useGameStore((state: GameStore) => state.createLobby)
	const leaveLobby = useGameStore((state: GameStore) => state.leaveLobby)
	const setIsCreator = useGameStore((state: GameStore) => state.setIsCreator)

	useEffect(() => {
		if (code) return
		setIsCreator(true)
		createLobby()
	}, [createLobby, setIsCreator, code])

	const handleExit = () => {
		leaveLobby()
		router.dismiss()
	}
	const handleShare = () => {
		console.log("Sharing code", code)
	}

	const styles = {
		container: "flex justify-center bg-primary",
		headerContainer: "absolute left-10 top-4 flex flex-row w-2/3 gap-6",
		headerText: "text-3xl font-bold text-white",
		subheaderText: "text-base-200",
		codeContainer:
			"flex h-full items-center justify-start bg-white bg-gray-100  rounded-lg rounded-t-3xl mt-72 pt-20 gap-8",
		codeText: "text-xl font-bold",
		buttonContainer:
			"flex flex-col items-center justify-center w-full gap-6",
		backButton:
			"flex items-center justify-center bg-base-100 border border-primary p-4 rounded-full  h-16",
		shareButton:
			"flex items-center justify-center bg-base-100 border border-primary p-4 rounded-full",
		codeTextContainer: "flex flex-row items-center justify-center",
		codeDigitBox: "bg-gray-200 rounded-md m-1 p-4",
	}

	return (
		<SafeAreaView
			style={{
				backgroundColor: "#6D28D9",
			}}
		>
			<StatusBar style="light" />
			<View className={styles.container}>
				<View className={styles.headerContainer}>
					<Pressable
						onPress={handleExit}
						className={styles.backButton}
					>
						<MaterialCommunityIcons
							name="chevron-left"
							size={24}
							color="#6D28D9"
						/>
					</Pressable>
					<View>
						<Text className={styles.headerText}>Create Game</Text>
						<Text className={styles.subheaderText}>
							Copy and share this lobby code with your friends to
							join the game
						</Text>
					</View>
				</View>
				<View className={styles.codeContainer}>
					<View className={styles.codeTextContainer}>
						{code?.split("").map((digit, index) => (
							<View key={index} className={styles.codeDigitBox}>
								<Text className={styles.codeText}>{digit}</Text>
							</View>
						))}
					</View>
					<View className={styles.buttonContainer}>
						<Pressable
							onPress={handleShare}
							className={styles.shareButton}
						>
							<MaterialCommunityIcons
								name="share-variant"
								size={24}
								color="#6D28D9"
							/>
						</Pressable>

						<Button size="lg" color="primary" label="Continue" />
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}
