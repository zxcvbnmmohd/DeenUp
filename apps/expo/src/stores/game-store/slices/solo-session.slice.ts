import type { StateCreator } from "zustand"

import type { GameStore } from "."
import type { Question } from "~/types"

import { randomQuestions } from "~/assets"

interface SoloSessionStates {
	questions: Question[]
	currentQuestion?: Question | null
	skippedQuestions: Question[]
	correctQuestions: Question[]
	incorrectQuestions: Question[]
}

interface SoloSessionActions {
	initializeQuestions(): void
	answerQuestion(questionId: string, answer: string): void
	skipQuestion(questionId: string): void
}

export type SoloSessionSlice = SoloSessionStates & SoloSessionActions

const createSoloSessionSlice: StateCreator<
	GameStore,
	[],
	[],
	SoloSessionSlice
> = (set, get) => {
	return {
		questions: [],
		currentQuestion: null,
		skippedQuestions: [],
		correctQuestions: [],
		incorrectQuestions: [],
		initializeQuestions: () => {
			set({ questions: randomQuestions(10) })
		},
		answerQuestion: (questionId, answer) => {
			const question = get().currentQuestion

			if (question && question.id === questionId) {
				if (question.correctAnswer === answer) {
					set((state: SoloSessionStates) => ({
						correctQuestions: [...state.correctQuestions, question],
					}))

					return
				}

				set((state: SoloSessionStates) => ({
					incorrectQuestions: [...state.incorrectQuestions, question],
				}))
			}
		},
		skipQuestion: (questionId) => {
			const question = get().currentQuestion

			if (question && question.id === questionId) {
				set((state: SoloSessionStates) => ({
					skippedQuestions: [...state.skippedQuestions, question],
				}))
			}
		},
	}
}

export default createSoloSessionSlice
