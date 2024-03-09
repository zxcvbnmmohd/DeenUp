export type Theme = {
	colors: {
		primary: string
		background: string
		surface: string
		accent: string
		// Add more colors as needed
	}
	// Add more theme properties as needed
}

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
