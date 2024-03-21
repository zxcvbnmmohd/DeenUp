import type { MaterialCommunityIcons } from "@expo/vector-icons"

import { Text, TextInput, View } from "react-native"

type Props = {
	type: "email" | "password" | "name"
	placeholder: string
	icon: keyof typeof MaterialCommunityIcons.glyphMap
	error: string
	value: string
	onChangeText: (text: string) => void
}

const InputField = ({
	type,
	placeholder,
	icon,
	value,
	error,
	onChangeText,
}: Props) => {
	const styles = {
		body: "bg-outline flex h-20 w-full flex-row items-center justify-start gap-2 rounded-xl border border-gray-200 bg-white px-4 shadow-md",
	}

	return (
		<View className={styles.body}>
			{/* <MaterialCommunityIcons name={icon} size={24} color="gray" /> */}
			<Text>
				{type === "email" ? "📧" : type === "password" ? "🔒" : "🥸"}
			</Text>
			<TextInput
				value={value}
				style={{ flex: 1, marginLeft: 10, fontSize: 18 }}
				placeholder={placeholder}
				keyboardType="default"
				secureTextEntry={type === "password"}
				autoCorrect={!(type === "password")}
				onChangeText={(val) => onChangeText(val)}
			/>

			{error && (
				// <MaterialCommunityIcons
				// 	name={"close-circle"}
				// 	size={24}
				// 	color="red"
				// />
				<Text>⛔️🙅‍♂️</Text>
			)}
			{error && (
				<Text className="absolute -bottom-6 left-3  text-sm font-light text-red-500">
					🗣{error}
				</Text>
			)}
		</View>
	)
}

export default InputField
