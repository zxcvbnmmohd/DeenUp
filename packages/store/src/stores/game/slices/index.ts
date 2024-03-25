import type { LobbySlice } from "./lobby.slice"
import type { MultiplayerSessionSlice } from "./multiplayer-session.slice"
import type { PlayerSlice } from "./player.slice"
import type { SoloSessionSlice } from "./solo-session.slice"
import type { TimerSlice } from "./timer.slice"

import createLobbySlice from "./lobby.slice"
import createMultiplayerSessionSlice from "./multiplayer-session.slice"
import createPlayerSlice from "./player.slice"
import createSoloSessionSlice from "./solo-session.slice"
import createTimerSlice from "./timer.slice"

type GameStore = PlayerSlice &
	LobbySlice &
	MultiplayerSessionSlice &
	SoloSessionSlice &
	TimerSlice

export type {
	PlayerSlice,
	LobbySlice,
	MultiplayerSessionSlice,
	SoloSessionSlice,
	GameStore,
	TimerSlice,
}

export {
	createPlayerSlice,
	createLobbySlice,
	createMultiplayerSessionSlice,
	createSoloSessionSlice,
	createTimerSlice,
}
