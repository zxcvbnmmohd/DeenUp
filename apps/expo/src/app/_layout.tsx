import { useEffect } from "react"

import { useFonts } from "expo-font"
import { router, Stack, usePathname } from "expo-router"
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"

import "react-native-reanimated"
import "react-native-gesture-handler"

import FontAwesome from "@expo/vector-icons/FontAwesome"

import { TRPCProvider } from "~/utils/api"

import "~styles/styles.css"

import { TouchableOpacity } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"

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
	const pathname = usePathname()

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
			>
				<Stack.Screen name="index" />
				<Stack.Screen
					name="(auth)"
					options={{
						presentation:
							pathname === "/verification"
								? "transparentModal"
								: "modal",
						headerShadowVisible: false,
						headerBlurEffect: "light",
						headerStyle: {
							backgroundColor:
								pathname === "/verification"
									? "#F9FAFB"
									: "#6D28D9",
						},
						headerShown: pathname === "/verification" ? true : true,
						headerTitle: "",
						headerRight: (props) => (
							<TouchableOpacity
								className={"size-10"}
								onPress={() => router.back()}
							>
								<MaterialCommunityIcons
									name="close"
									color={
										pathname === "/verification"
											? "black"
											: "white"
									}
									size={32}
								/>
							</TouchableOpacity>
						),
					}}
				/>
			</Stack>
			<StatusBar />
		</TRPCProvider>
	)
}

export default RootLayout
