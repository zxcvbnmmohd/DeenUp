import type { StateCreator } from "zustand"

import type { GameStore } from "."

interface TimerStates {
	timeInSeconds: number
	intervalId: NodeJS.Timeout | null
}

interface TimerActions {
	start: () => void
	pause: () => void
	stop: () => void
}

export type TimerSlice = TimerStates & TimerActions

const createTimerSlice: StateCreator<GameStore, [], [], TimerSlice> = (
	set,
	get,
) => {
	return {
		timeInSeconds: 0,
		intervalId: null,
		start: () => {
			set((state) => ({
				...state,
				intervalId: setInterval(() => {
					set((state) => ({
						...state,
						timeInSeconds: state.timeInSeconds + 1,
					}))
				}, 1000),
			}))
		},
		pause: () => {
			const { intervalId } = get()

			if (intervalId) {
				clearInterval(intervalId)
				set((state) => ({
					...state,
					intervalId: null,
				}))
			}
		},
		stop: () => {
			get().pause()
			set((state) => ({
				...state,
				timeInSeconds: 0,
			}))
		},
	}
}

export default createTimerSlice
