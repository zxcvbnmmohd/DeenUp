import type { ReactNode } from "react"
import type { GestureResponderEvent } from "react-native"

import { Text, TouchableOpacity, View } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"

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
	const borderStyle =
		isSelected && showResult
			? `border-${isCorrect ? "green" : "red"}-500`
			: ""

	const styles = {
		card: `row items-center justify-between py-6 rounded-xl bg-gray-100 ${isSelected ? "border" : ""} ${borderStyle}`,
		text: "text-gray-500 font-semibold text-xl",
		circle: `border-2 rounded-full items-center justify-center p-2 absolute right-2 bottom-2 ${
			isCorrect ? "border-green-500" : "border-red-500"
		}`,
	}

	return (
		<TouchableOpacity className={styles.card} onPress={onPress}>
			<Text className={styles.text}>{label}</Text>
			{isSelected && showResult && (
				<View className={styles.circle}>
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
