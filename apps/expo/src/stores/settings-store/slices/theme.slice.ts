import type { StateCreator } from "zustand"

import type { SettingsStore } from "."
import type { Theme } from "~/types"

import { Themes } from "~/configs"

enum ThemeMode {
	LIGHT,
	DARK,
}

type ThemeStates = {
	themeMode: ThemeMode
	theme: Theme
}

type ThemeActions = {
	switchTheme: () => void
}

export type ThemeSlice = ThemeStates & ThemeActions

const createThemeSlice: StateCreator<SettingsStore, [], [], ThemeSlice> = (
	set,
	get,
) => ({
	themeMode: ThemeMode.LIGHT,
	theme: Themes.light,
	switchTheme: () => {
		const newMode =
			get().themeMode === ThemeMode.LIGHT
				? ThemeMode.DARK
				: ThemeMode.LIGHT

		set((state) => ({
			...state,
			themeMode: newMode,
			theme: newMode === ThemeMode.LIGHT ? Themes.light : Themes.dark,
		}))
	},
})

export default createThemeSlice
