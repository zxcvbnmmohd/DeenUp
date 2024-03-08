import { create } from "zustand"
import { persist } from "zustand/middleware"

import type { SettingsStore } from "./slices"

import {
	createLanguageSlice,
	createSoundSlice,
	createThemeSlice,
} from "./slices"

export const useSettingsStore = create<SettingsStore>()(
	persist(
		(...a) => ({
			...createLanguageSlice(...a),
			...createSoundSlice(...a),
			...createThemeSlice(...a),
		}),
		{
			name: "deenup-settings-store",
		},
	),
)

export default useSettingsStore
