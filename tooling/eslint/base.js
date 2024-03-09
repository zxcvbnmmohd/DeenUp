/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [
		"turbo",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:tailwindcss/recommended",
		"prettier",
	],
	env: {
		es2022: true,
		node: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
		sourceType: "module",
		ecmaVersion: "latest",
	},
	plugins: ["@typescript-eslint", "import"],
	rules: {
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{ prefer: "type-imports", fixStyle: "separate-type-imports" },
		],
		"@typescript-eslint/no-misused-promises": [
			2,
			{ checksVoidReturn: { attributes: false } },
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
		],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" },
		],
		"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"turbo/no-undeclared-env-vars": "off",
	},
	ignorePatterns: [
		"**/*.config.js",
		"**/*.config.cjs",
		"**/.eslintrc.cjs",
		".next",
		"dist",
		"pnpm-lock.yaml",
	],
	reportUnusedDisableDirectives: true,
}

module.exports = config
