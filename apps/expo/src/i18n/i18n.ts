import * as Localization from "expo-localization"

import { I18n } from "i18n-js"

import { en, ja } from "./langauges"

const i18n = new I18n({
	en,
	ja,
})

i18n.locale = Localization.getLocales()[0]!.languageCode!
i18n.enableFallback = true
i18n.locale = "en"

// Example Usage:
// import { i18n } from "./i18n"
//
// i18n.t("welcome") // "Welcome"
//
// i18n.t(["hello", "Mohamed"]) // "Hello, Mohamed"
// or
// i18n.t("hello.Mohamed") // "Hello, Mohamed"

export default i18n
