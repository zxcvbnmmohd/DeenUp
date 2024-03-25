import { create } from "zustand"

import type { GameStore } from "./slices"

import {
	createLobbySlice,
	createMultiplayerSessionSlice,
	createPlayerSlice,
	createSoloSessionSlice,
	createTimerSlice,
} from "./slices"

const useGameStore = create<GameStore>()((...a) => ({
	...createPlayerSlice(...a),
	...createLobbySlice(...a),
	...createMultiplayerSessionSlice(...a),
	...createSoloSessionSlice(...a),
	...createTimerSlice(...a),
}))

export default useGameStore
