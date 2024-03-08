import type { ConfigContext, ExpoConfig } from "expo/config"

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: "DeenUp",
	slug: "DeenUp",
	scheme: "DeenUp",
	version: "0.1.0",
	orientation: "portrait",
	icon: "./src/assets/icon.png",
	userInterfaceStyle: "automatic",
	splash: {
		image: "./src/assets/icon.png",
		resizeMode: "contain",
		backgroundColor: "#1F104A",
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ["**/*"],
	ios: {
		bundleIdentifier: "ca.mohd.deenup",
		supportsTablet: true,
	},
	android: {
		package: "ca.mohd.deenup",
		adaptiveIcon: {
			foregroundImage: "./src/assets/icon.png",
			backgroundColor: "#1F104A",
		},
	},
	extra: {
		eas: {
			projectId: "a794d76d-0c7d-4902-895a-35bf2d9946ad",
		},
	},
	experiments: {
		tsconfigPaths: true,
		typedRoutes: true,
	},
	plugins: ["expo-localization", "expo-router"],
})
