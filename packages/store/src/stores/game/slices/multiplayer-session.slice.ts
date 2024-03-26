import type { StateCreator } from "zustand"

import type { GameStore } from "."
import type { Player, PossibleAnswer, Question } from "../../../types"

import { randomQuestions } from "../../../assets"

type MultiplayerSessionStates = {
	id: string | null
	sessionPlayers: Player[]
	sessionQuestions: Question[]
	currentSessionQuestionIndex: number
	possibleAnswers: PossibleAnswer[]
}

type MultiplayerSessionActions = {
	initializeSessionQuestions(): void
	submitPossibleAnswer(usserId: string, answer: string): void
	selectPossibleAnswer(answer: PossibleAnswer): void
	submitAnswers(): void
}

export type MultiplayerSessionSlice = MultiplayerSessionStates &
	MultiplayerSessionActions

const createMultiplayerSessionSlice: StateCreator<
	GameStore,
	[],
	[],
	MultiplayerSessionSlice
> = (set, get) => {
	return {
		id: null,
		sessionPlayers: [],
		sessionQuestions: [],
		currentSessionQuestionIndex: 0,
		possibleAnswers: [],
		initializeSessionQuestions: () => {
			set({ sessionQuestions: randomQuestions(10) })
		},
		submitPossibleAnswer: (userId, answer) => {
			const question =
				get().sessionQuestions[get().currentSessionQuestionIndex]

			if (question) {
				set((state: MultiplayerSessionStates) => ({
					possibleAnswers: [
						...state.possibleAnswers,
						{ userId, answer },
					],
				}))
			}
		},
		selectPossibleAnswer: (answer) => {
			set((state: MultiplayerSessionStates) => ({
				possibleAnswers: [...state.possibleAnswers, answer],
			}))
		},
		submitAnswers: () => {
			if (get().possibleAnswers.length === get().sessionPlayers.length) {
				set((state: MultiplayerSessionStates) => ({
					currentSessionQuestionIndex:
						state.currentSessionQuestionIndex + 1,
					possibleAnswers: [],
				}))
			}
		},
	}
}

export default createMultiplayerSessionSlice
