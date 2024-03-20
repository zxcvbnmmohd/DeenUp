import type { TranslateOptions } from "i18n-js"
import type { StateCreator } from "zustand"

import type { SettingsStore } from "."

import { i18n } from "~/i18n"

type LanguageStates = {
	currentLanguage: string
}

type LanguageActions = {
	changeLanguage: (language: string) => void
	translate: (key: string, options?: TranslateOptions) => string
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
		translate: (key, options?) => i18n.t(key, options),
	}
}

export default createLanguageSlice
