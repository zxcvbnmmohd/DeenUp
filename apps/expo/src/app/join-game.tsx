import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Link, Stack } from "expo-router"

export default function joinGame() {
	return (
		<SafeAreaView>
			<Stack.Screen
				options={{ title: "Friends Mode", presentation: "card" }}
			/>
			<View className="flex h-full items-center justify-center">
				<Link href="/">Dismiss</Link>
				<Text>Join Game</Text>
			</View>
		</SafeAreaView>
	)
}
