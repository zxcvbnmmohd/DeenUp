import type { ReactNode } from "react"

import { useEffect } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"

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

	const styles = StyleSheet.create({
		screen: {
			flex: 1,
			flexDirection: "column",
			alignItems: "stretch",
			justifyContent: "space-between",
			backgroundColor: theme.colors.primary,
		},
		body: {
			flex: 1,
			flexGrow: 1,
			flexDirection: "column",
			alignItems: "stretch",
			justifyContent: "space-between",
			padding: 25.0,
			marginHorizontal: 25.0,
			marginBottom: 25.0,
			backgroundColor: "#FFFFFF",
			borderRadius: 5.0,
			shadowColor: theme.colors.background,
			shadowOffset: {
				width: 10.0,
				height: 5.0,
			},
		},
		question: {
			textAlign: "left",
			fontSize: 24.0,
			fontWeight: "500",
		},
		options: {
			gap: 15.0,
		},
		column: {
			flexDirection: "column",
			alignItems: "stretch",
			gap: 15.0,
			paddingHorizontal: 25.0,
		},
	})

	useEffect(() => {
		stop()
		start()
		resetSoloSession()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<SafeAreaView style={styles.screen}>
			<QuestionHeader
				index={currentQuestionIndex + 1}
				length={questions.length}
				minutes={minutes}
				seconds={seconds}
			/>
			<View style={styles.body}>
				<Text style={styles.question}>
					{questions[currentQuestionIndex]?.question}
				</Text>
				<View style={styles.options}>
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
			<View style={styles.column}>
				<Button
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
				<Button label="Exit" onPress={() => router.back()} />
			</View>
		</SafeAreaView>
	)
}
