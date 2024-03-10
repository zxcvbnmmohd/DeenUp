import React from "react"
import { Pressable, View } from "react-native"

import { router } from "expo-router"

import AntIcons from "@expo/vector-icons/AntDesign"

import { Button } from "."

type Props = {
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function FriendsModeOptions({ setModalOpen }: Props) {
	const styles = {
		container:
			"flex w-full items-center gap-4 rounded-3xl bg-white p-14 shadow-none ",
		closeBtn: "absolute right-4 top-2 rounded-full shadow ",
	}
	const navigateAndClose = (navigateTo: string) => {
		if (navigateTo === "Create Game") {
			router.push("/create-game")
		}
		if (navigateTo === "Join Game") {
			router.push("/join-game")
		}
		setModalOpen(false)
	}

	return (
		<View className={styles.container}>
			<Pressable
				onPress={() => setModalOpen(false)}
				className={styles.closeBtn}
			>
				<AntIcons name="close" color={"indigo"} size={32} />
			</Pressable>
			<Button
				size="xl"
				color="primary"
				label="Join Game"
				onPress={() => navigateAndClose("Join Game")}
			/>
			<Button
				size="xl"
				color="primary"
				label="Create Game"
				onPress={() => navigateAndClose("Create Game")}
			/>
		</View>
	)
}
