import type { ReactNode } from "react"

import { StyleSheet, Text, View } from "react-native"
import { ProgressBar } from "react-native-paper"

import { Timer } from "~/components"
import { useTheme } from "~/hooks"

const QuestionHeader = ({
	index,
	length,
	minutes,
	seconds,
}: {
	index: number
	length: number
	minutes: number
	seconds: number
}): ReactNode => {
	const { theme } = useTheme()

	const styles = StyleSheet.create({
		text: {
			color: "#FFFFFF",
			fontSize: 24.0,
			fontWeight: "bold",
		},
	})

	return (
		<View
			style={{
				flexDirection: "column",
				alignItems: "stretch",
				paddingHorizontal: 10.0,
				paddingVertical: 25.0,
				backgroundColor: theme.colors.primary,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: 25.0,
				}}
			>
				<Text style={styles.text}>Question {index}</Text>
				<Timer minute={minutes} second={seconds} />
			</View>
			<ProgressBar
				progress={index / length}
				color={theme.colors.accent}
				style={{
					borderRadius: 5.0,
					backgroundColor: theme.colors.surface,
				}}
			/>
		</View>
	)
}

export default QuestionHeader
