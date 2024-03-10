import type { ReactNode } from "react"

import { useEffect } from "react"
import { SafeAreaView, Text, View } from "react-native"

import { router } from "expo-router"

import type { GameStore, SettingsStore } from "~/stores"

import { Button } from "~/components"
import QuestionHeader from "~/components/gameplay/QuestionHeader"
import QuestionOption from "~/components/gameplay/QuestionOption"
import { useGameStore, useSettingsStore } from "~/stores"

export default function Page(): ReactNode {
	const theme = useSettingsStore((state: SettingsStore) => state.theme)
	const minutes = useGameStore((state: GameStore) => state.minutes)
	const seconds = useGameStore((state: GameStore) => state.seconds)
	const start = useGameStore((state: GameStore) => state.start)
	const stop = useGameStore((state: GameStore) => state.stop)
	const currentQuestionIndex = useGameStore(
		(state: GameStore) => state.currentQuestionIndex,
	)
	const selectedAnswer = useGameStore(
		(state: GameStore) => state.selectedAnswer,
	)
	const showResult = useGameStore((state: GameStore) => state.showResult)
	const questions = useGameStore((state: GameStore) => state.questions)
	const selectAnswer = useGameStore((state: GameStore) => state.selectAnswer)
	const answerQuestion = useGameStore(
		(state: GameStore) => state.answerQuestion,
	)
	const nextQuestion = useGameStore((state: GameStore) => state.nextQuestion)
	const resetSoloSession = useGameStore(
		(state: GameStore) => state.resetSoloSession,
	)

	useEffect(() => {
		stop()
		start()
		resetSoloSession()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const styles = {
		screen: "flex flex-col items-stretch justify-between bg-primary",
		body: "flex flex-col flex-grow justify-around items-stretch p-12 mx-6 mb-2 bg-white rounded-md shadow-md shadow-offset-x-10 shadow-offset-y-5",
		question: "text-left text-2xl font-bold",
		options: "gap-6",
		column: "flex-col items-stretch gap-8 px-8",
	}

	return (
		<SafeAreaView
			style={{
				flex: 1,
				flexDirection: "column",
				alignItems: "stretch",
				justifyContent: "space-between",
				backgroundColor: theme.colors.primary,
			}}
		>
			<QuestionHeader
				index={currentQuestionIndex + 1}
				length={questions.length}
				minutes={minutes}
				seconds={seconds}
			/>
			<View className={styles.body}>
				<Text className={styles.question}>
					{questions[currentQuestionIndex]?.question}
				</Text>
				<View className={styles.options}>
					{questions[currentQuestionIndex]?.options.map(
						(option, index) => (
							<QuestionOption
								key={index}
								label={option}
								isSelected={selectedAnswer === option}
								showResult={showResult}
								isCorrect={
									selectedAnswer ===
									questions[currentQuestionIndex]
										?.correctAnswer
								}
								onPress={() => {
									questions[index]!.userAnswer = option
									selectAnswer({ answer: option })
								}}
							/>
						),
					)}
				</View>
			</View>
			<View className={styles.column}>
				<Button
					size="lg"
					label={
						questions.length - 1 === currentQuestionIndex
							? "Submit"
							: "Next"
					}
					outline
					onPress={() => {
						if (
							!selectedAnswer ||
							!questions[currentQuestionIndex]
						) {
							return
						}

						answerQuestion()

						setTimeout(() => {
							if (questions.length - 1 === currentQuestionIndex) {
								router.push("/result/")
							} else {
								nextQuestion()
							}
						}, 1000)
					}}
				/>
				<Button size="lg" label="Exit" onPress={() => router.back()} />
			</View>
		</SafeAreaView>
	)
}
