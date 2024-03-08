import React from "react"
import { Pressable, View } from "react-native"

import { router } from "expo-router"

import AntIcons from "@expo/vector-icons/AntDesign"

import { Button } from "."

interface Props {
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function FriendsModeOptions({ setModalOpen }: Props) {
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
		<View className="flex w-full gap-4 rounded-3xl bg-white p-11 shadow-none">
			<Pressable
				onPress={() => setModalOpen(false)}
				className="absolute right-4 top-2 rounded-full shadow "
			>
				<AntIcons name="close" color={"indigo"} size={20} />
			</Pressable>
			<Button
				label="Join Game"
				onPress={() => navigateAndClose("Join Game")}
			/>
			<Button
				label="Create Game"
				onPress={() => navigateAndClose("Create Game")}
			/>
		</View>
	)
}
