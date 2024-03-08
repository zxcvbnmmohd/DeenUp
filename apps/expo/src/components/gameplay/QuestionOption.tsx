import type { ReactNode } from "react"
import type { GestureResponderEvent } from "react-native"

import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"

import { useTheme } from "~/hooks"

const QuestionOption = ({
	label,
	isSelected,
	showResult,
	isCorrect,
	onPress,
}: {
	label: string
	isSelected: boolean
	showResult: boolean
	isCorrect: boolean
	onPress?: ((event: GestureResponderEvent) => void) | undefined
}): ReactNode => {
	const { theme } = useTheme()

	const borderColor = isCorrect ? "#00D30A" : "#FF0200"

	const styles = StyleSheet.create({
		card: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			paddingHorizontal: 25.0,
			paddingVertical: 20.0,
			backgroundColor: "#F2F2F2",
			borderRadius: 5.0,
			borderColor: isSelected
				? showResult
					? borderColor
					: "#8E9FBF"
				: "#F2F2F2",
			borderWidth: 2.5,
			shadowColor: theme.colors.surface,
			shadowOffset: {
				width: 10.0,
				height: 5.0,
			},
		},
		text: {
			color: "#8E9FBF",
			fontSize: 22.0,
			fontWeight: "600",
		},
		circle: {
			borderWidth: 2.0,
			borderColor: borderColor,
			borderRadius: 50.0,
			alignItems: "center",
			justifyContent: "center",
			padding: 2.0,
		},
	})

	return (
		<TouchableOpacity style={styles.card} onPress={onPress}>
			<Text style={styles.text}>{label}</Text>
			{isSelected && showResult && (
				<View style={styles.circle}>
					<MaterialCommunityIcons
						name={isCorrect ? "check" : "close"}
						size={18}
						color={isCorrect ? "#00D30A" : "#FF0200"}
					/>
				</View>
			)}
		</TouchableOpacity>
	)
}
export default QuestionOption
