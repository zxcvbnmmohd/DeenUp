import type { StateCreator } from "zustand"

import type { GameStore } from "."

type TimerStates = {
	seconds: number
	minutes: number
}

type TimerActions = {
	start: () => void
	pause: () => void
	stop: () => void
}

export type TimerSlice = TimerStates & TimerActions

const createTimerSlice: StateCreator<GameStore, [], [], TimerSlice> = (set) => {
	let intervalId: NodeJS.Timeout | undefined

	return {
		seconds: 0,
		minutes: 0,
		start: () => {
			intervalId = setInterval(() => {
				set((state) => {
					const newSeconds = state.seconds + 1
					const newMinutes = Math.floor(newSeconds / 60)

					return {
						...state,
						seconds: newSeconds % 60,
						minutes: state.minutes + newMinutes,
					}
				})
			}, 1000)
		},
		pause: () => clearInterval(intervalId),
		stop: () => {
			clearInterval(intervalId)
			set(() => ({
				seconds: 0,
				minutes: 0,
			}))
		},
	}
}

export default createTimerSlice
