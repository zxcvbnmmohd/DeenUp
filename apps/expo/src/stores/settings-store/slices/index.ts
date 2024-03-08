import type { LanguageSlice } from "./i18n.slice"
import type { SoundSlice } from "./sound.slice"
import type { ThemeSlice } from "./theme.slice"

import createLanguageSlice from "./i18n.slice"
import createSoundSlice from "./sound.slice"
import createThemeSlice from "./theme.slice"

export type SettingsStore = LanguageSlice & SoundSlice & ThemeSlice

export { createLanguageSlice, createSoundSlice, createThemeSlice }
