import type { StateCreator } from "zustand"

import type { SettingsStore } from "."

type SoundStates = {
	isSoundEnabled: boolean
	volume: number
}

type SoundActions = {
	toggleSound: () => void
	setVolume: (volume: number) => void
}

export type SoundSlice = SoundStates & SoundActions

const createSoundSlice: StateCreator<SettingsStore, [], [], SoundSlice> = (
	set,
) => {
	return {
		isSoundEnabled: true,
		volume: 50,
		toggleSound: () => {
			set((state) => ({
				...state,
				isSoundEnabled: !state.isSoundEnabled,
			}))
		},
		setVolume: (volume) => {
			set((state) => ({
				...state,
				volume: volume,
			}))
		},
	}
}

export default createSoundSlice
