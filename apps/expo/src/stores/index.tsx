import type { GameStore } from "./game-store/slices"
import type { SettingsStore } from "./settings-store/slices"

import useGameStore from "./game-store/useGameStore"
import useSettingsStore from "./settings-store/useSettingsStore"

export { useGameStore, useSettingsStore }
export type { GameStore, SettingsStore }
