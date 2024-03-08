import React, { useEffect } from "react"

import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"

import "react-native-reanimated"
import "react-native-gesture-handler"

import FontAwesome from "@expo/vector-icons/FontAwesome"

import { TRPCProvider } from "~/utils/api"

import "~styles/styles.css"

import { SpaceMonoRegular } from "~/assets"
import { useTheme } from "~/hooks"

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router"

export const unstable_settings = {
	initialRouteName: "/",
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
preventAutoHideAsync().catch((error) => {
	console.error(error)
})

const RootLayout = () => {
	const [loaded, error] = useFonts({
		SpaceMono: SpaceMonoRegular,
		...FontAwesome.font,
	})
	const { theme } = useTheme()

	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) {
			hideAsync().catch((error) => {
				console.error(error)
			})
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return (
		<TRPCProvider>
			<Stack
				screenOptions={{
					headerShown: false,
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					headerTintColor: theme.colors.surface,
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			/>
			<StatusBar />
		</TRPCProvider>
	)
}

export default RootLayout
