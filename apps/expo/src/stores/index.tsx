import type { AuthStore, GameStore, UserStore } from "@deenup/store"

import { useAuthStore, useGameStore, useUserStore } from "@deenup/store"

import type { SettingsStore } from "./settings-store/slices"

import useSettingsStore from "./settings-store/useSettingsStore"

export { useGameStore, useSettingsStore, useAuthStore, useUserStore }
export type { GameStore, SettingsStore, AuthStore, UserStore }
