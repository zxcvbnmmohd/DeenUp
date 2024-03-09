import type { StateCreator } from "zustand"

import type { GameStore } from "."
import type { Question } from "~/types"

import { randomQuestions } from "~/assets"

type SoloSessionStates = {
	currentQuestionIndex: number
	selectedAnswer: string | null
	showResult: boolean
	questions: Question[]
	correctQuestions: Question[]
	incorrectQuestions: Question[]
	skippedQuestions: Question[]
}

type SoloSessionActions = {
	selectAnswer: (params: { answer: string }) => void
	answerQuestion: () => void
	skipQuestion: () => void
	nextQuestion: () => void
	resetSoloSession: () => void
}

export type SoloSessionSlice = SoloSessionStates & SoloSessionActions

const createSoloSessionSlice: StateCreator<
	GameStore,
	[],
	[],
	SoloSessionSlice
> = (set, get) => {
	return {
		currentQuestionIndex: 0,
		selectedAnswer: null,
		showResult: false,
		questions: randomQuestions(10),
		correctQuestions: [],
		incorrectQuestions: [],
		skippedQuestions: [],
		selectAnswer: (params: { answer: string }) => {
			set({ selectedAnswer: params.answer })
		},
		answerQuestion: () => {
			const { currentQuestionIndex, selectedAnswer, questions } = get()
			const question = questions[currentQuestionIndex]

			if (!question) return
			if (!selectedAnswer) return

			if (question.correctAnswer === selectedAnswer) {
				set((state: SoloSessionStates) => ({
					showResult: true,
					correctQuestions: [...state.correctQuestions, question],
				}))

				return
			}

			set((state: SoloSessionStates) => ({
				showResult: true,
				incorrectQuestions: [...state.incorrectQuestions, question],
			}))
		},
		skipQuestion: () => {
			const { questions, currentQuestionIndex } = get()
			const question = questions[currentQuestionIndex]

			if (!question) return

			set((state: SoloSessionStates) => ({
				currentQuestionIndex: state.currentQuestionIndex + 1,
				skippedQuestions: [...state.skippedQuestions, question],
			}))
		},
		nextQuestion: () => {
			const { currentQuestionIndex } = get()

			set({
				currentQuestionIndex: currentQuestionIndex + 1,
				selectedAnswer: null,
				showResult: false,
			})
		},
		resetSoloSession: () => {
			set({
				currentQuestionIndex: 0,
				selectedAnswer: null,
				showResult: false,
				questions: randomQuestions(10),
				correctQuestions: [],
				incorrectQuestions: [],
				skippedQuestions: [],
			})
		},
	}
}

export default createSoloSessionSlice
