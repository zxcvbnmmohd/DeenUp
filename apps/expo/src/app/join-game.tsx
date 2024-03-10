import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Link, Stack } from "expo-router"

export default function joinGame() {
	const styles = {
		container: "flex h-full items-center justify-center",
	}

	return (
		<SafeAreaView>
			<Stack.Screen
				options={{ title: "Friends Mode", presentation: "card" }}
			/>
			<View className={styles.container}>
				<Link href="/">Dismiss</Link>
				<Text>Join Game</Text>
			</View>
		</SafeAreaView>
	)
}
