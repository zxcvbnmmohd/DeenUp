export type Result<T> =
	| { onSuccess: T; onFailure?: never }
	| { onSuccess?: never; onFailure: string }

export type Question = {
	id: string
	question: string
	options: string[]
	correctAnswer: string
	userAnswer: string
}

export type PossibleAnswer = {
	userId: string
	answer: string
}

export type Player = {
	id: string
}

type TimerState = {
	timeInSeconds: number
	minutes: number
	seconds: number
}

type TimerAction = {
	start: () => void
	pause: () => void
	stop: () => void
}

export type TimerStore = TimerState & TimerAction
