import type { StateCreator } from "zustand"

import type { SettingsStore } from "."

import { i18n } from "~/i18n"

interface LanguageStates {
	currentLanguage: string
}

interface LanguageActions {
	changeLanguage: (language: string) => void
	translate: (key: string) => string
}

export type LanguageSlice = LanguageStates & LanguageActions

const createLanguageSlice: StateCreator<
	SettingsStore,
	[],
	[],
	LanguageSlice
> = (set) => {
	return {
		currentLanguage: i18n.locale,
		changeLanguage: (language) => {
			i18n.locale = language
			set({ currentLanguage: language })
		},
		translate: (key) => i18n.t(key),
	}
}

export default createLanguageSlice
