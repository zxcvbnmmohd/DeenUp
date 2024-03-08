import type { ReactNode } from "react"

import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Link, router, Stack } from "expo-router"

export default function Page(): ReactNode {
	const isPresented = router.canGoBack()
	return (
		<SafeAreaView className="bg-[#1F104A]">
			<Stack.Screen
				options={{ title: "Friends Mode", presentation: "modal" }}
			/>
			<View className="flex-col items-center gap-3">
				{!isPresented && <Link href="../">Dismiss</Link>}
			</View>
		</SafeAreaView>
	)
}
