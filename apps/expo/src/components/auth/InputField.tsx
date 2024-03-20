import { Text, TextInput, View } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"

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
			<MaterialCommunityIcons name={icon} size={24} color="gray" />
			<TextInput
				value={value}
				style={{ flex: 1, marginLeft: 10, fontSize: 18 }}
				placeholder={placeholder}
				keyboardType="default"
				secureTextEntry={type === "password"}
				autoCorrect={!(type === "password")}
				onChangeText={(val) => onChangeText(val)}
			/>
			{error && <Text className="text-red-500">{error}</Text>}
		</View>
	)
}

export default InputField
