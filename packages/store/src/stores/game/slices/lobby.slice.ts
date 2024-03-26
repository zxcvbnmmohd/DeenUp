import type { StateCreator } from "zustand"

import type { GameStore } from "."
import type { Player } from "../../../types"

type LobbyStates = {
	lobbyCode: string | null
	players: Player[]
	isCreator: boolean
}

type LobbyActions = {
	setIsCreator: (isCreator: boolean) => void
	createLobby: () => void
	shareLobbyCode: () => void
	joinLobby: (lobbyCode: string) => void
	leaveLobby: () => void
}

export type LobbySlice = LobbyStates & LobbyActions

const createLobbySlice: StateCreator<GameStore, [], [], LobbySlice> = (
	set,
	get,
) => ({
	lobbyCode: null,
	players: [],
	isCreator: false,
	setIsCreator: (isCreator) => {
		set({ isCreator })
	},
	createLobby: () => {
		if (get().isCreator) {
			const lobbyCode = () => {
				const characters =
					"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
				let code = ""

				for (let i = 0; i < 8; i++) {
					code += characters.charAt(
						Math.floor(Math.random() * characters.length),
					)
				}

				return code
			}

			set({ lobbyCode: lobbyCode() })
		}
	},
	shareLobbyCode: () => {
		console.log("shareRoom")
	},
	joinLobby: (lobbyCode) => {
		set({ lobbyCode })
	},
	leaveLobby: () => {
		set({ lobbyCode: undefined, isCreator: false, players: [] })
	},
})

export default createLobbySlice
