import type { StateCreator } from "zustand"

import type { GameStore } from "."

type PlayerStates = {
	name: string | null
	selfie: string | null
	hasProfile: boolean
}

type PlayerActions = {
	createProfile: (name: string, selfie: string) => void
}

export type PlayerSlice = PlayerStates & PlayerActions

const createPlayerSlice: StateCreator<GameStore, [], [], PlayerSlice> = (
	set,
) => ({
	name: null,
	selfie: null,
	hasProfile: false,
	createProfile: (name, selfie) => {
		set({ name, selfie, hasProfile: true })
	},
})

export default createPlayerSlice
