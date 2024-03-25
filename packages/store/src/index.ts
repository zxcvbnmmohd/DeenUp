import type { AuthStore } from "./stores/auth/slices"
import type { GameStore } from "./stores/game/slices"
import type { UserStore } from "./stores/user/slices"

import useAuthStore from "./stores/auth/useAuthStore"
import useGameStore from "./stores/game/useGameStore"
import useUserStore from "./stores/user/useUserStore"

export { useGameStore, useUserStore, useAuthStore }
export type { AuthStore, GameStore, UserStore }
