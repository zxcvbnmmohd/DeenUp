import type { ReactNode } from "react"

import { Text, View } from "react-native"
import { ProgressBar } from "react-native-paper"

import { Timer } from "~/components"

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
	const styles = {
		base: "py-12 flex-col items-stretch px-10",
		row: "mb-2 flex-row items-center justify-between",
		text: "text-4xl font-bold text-white",
		progressBar: "rounded-5 bg-surface",
	}

	return (
		<View className={styles.base}>
			<View className={styles.row}>
				<Text className={styles.text}>Question {index}</Text>
				<Timer minute={minutes} second={seconds} />
			</View>
			<ProgressBar
				color="#03dac6"
				progress={index / length}
				className={styles.progressBar}
			/>
		</View>
	)
}

export default QuestionHeader
