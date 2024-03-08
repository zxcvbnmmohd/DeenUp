import { fileURLToPath } from "url"

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
	trailingComma: "all",
	tabWidth: 4,
	semi: false,
	singleQuote: false,
	arrowParens: "always",
	printWidth: 80,
	useTabs: true,
	plugins: [
		"@ianvs/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],
	tailwindConfig: fileURLToPath(
		new URL("../../tooling/tailwind/web.ts", import.meta.url),
	),
	tailwindFunctions: ["cn", "cva"],
	importOrder: [
		"<TYPES>",
		"",
		"^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
		"",
		"^(next/(.*)$)|^(next$)",
		"",
		"^(expo(.*)$)|^(expo$)",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"<TYPES>^@deenup",
		"",
		"^@deenup/(.*)$",
		"",
		"<TYPES>^[.|..|~]",
		"",
		"^~/",
		"",
		"^[../]",
		"^[./]",
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderTypeScriptVersion: "4.4.0",
}

export default config
