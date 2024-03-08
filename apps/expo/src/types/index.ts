export interface Theme {
	colors: {
		primary: string
		background: string
		surface: string
		accent: string
		// Add more colors as needed
	}
	// Add more theme properties as needed
}

export interface Question {
	id: string
	question: string
	options: string[]
	correctAnswer: string
	userAnswer: string
}

export interface PossibleAnswer {
	userId: string
	answer: string
}

export interface Player {
	id: string
}

interface TimerState {
	timeInSeconds: number
	minutes: number
	seconds: number
}

interface TimerAction {
	start: () => void
	pause: () => void
	stop: () => void
}

export type TimerStore = TimerState & TimerAction
