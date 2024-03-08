import type { ReactNode } from "react"

import { useEffect, useState } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"

import { router } from "expo-router"

import type { Question } from "~/types"

import { questions } from "~/assets"
import { Button } from "~/components"
import QuestionHeader from "~/components/gameplay/QuestionHeader"
import QuestionOption from "~/components/gameplay/QuestionOption"
import { useTheme, useTimer } from "~/hooks"

interface State {
	questions: Question[]
	currentQuestionIndex: number
	didSelect: boolean
	showResult: boolean
}

export default function Page(): ReactNode {
	const [states, setStates] = useState<State>({
		questions: questions.sort(() => Math.random() - 0.5).slice(0, 5),
		currentQuestionIndex: 0,
		didSelect: false,
		showResult: false,
	})
	const { theme } = useTheme()
	const { minutes, seconds, start } = useTimer()

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
		start()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<SafeAreaView style={styles.screen}>
			<QuestionHeader
				index={states.currentQuestionIndex + 1}
				length={states.questions.length}
				minutes={minutes}
				seconds={seconds}
			/>
			<View style={styles.body}>
				<Text style={styles.question}>
					{states.questions[states.currentQuestionIndex]?.question}
				</Text>
				<View style={styles.options}>
					{states.questions[states.currentQuestionIndex]?.options.map(
						(option, index) => (
							<QuestionOption
								key={index}
								label={option}
								isSelected={
									states.didSelect &&
									states.questions[
										states.currentQuestionIndex
									]?.userAnswer === option
								}
								showResult={states.showResult}
								isCorrect={
									states.questions[
										states.currentQuestionIndex
									]?.correctAnswer === option
								}
								onPress={() => {
									const questions = states.questions

									questions[
										states.currentQuestionIndex
									]!.userAnswer = option

									setStates({
										...states,
										questions,
										didSelect: true,
									})
								}}
							/>
						),
					)}
				</View>
			</View>
			<View style={styles.column}>
				{states.questions.length - 1 === states.currentQuestionIndex ? (
					<Button
						label="Submit"
						outline
						onPress={() => {
							if (states.didSelect === false) {
								return
							}

							setStates({
								...states,
								showResult: true,
							})

							setTimeout(() => {
								setStates({
									...states,
									didSelect: false,
									showResult: false,
								})

								router.push("/result/")
							}, 1000)
						}}
					/>
				) : (
					<Button
						label="Next"
						outline
						onPress={() => {
							if (
								states.questions[states.currentQuestionIndex]
									?.userAnswer === undefined
							) {
								return
							}

							setStates({
								...states,
								showResult: true,
							})

							setTimeout(() => {
								setStates({
									...states,
									currentQuestionIndex:
										states.currentQuestionIndex + 1,
									didSelect: false,
									showResult: false,
								})
							}, 1000)
						}}
					/>
				)}
				<Button label="Exit" onPress={() => router.back()} />
			</View>
		</SafeAreaView>
	)
}
