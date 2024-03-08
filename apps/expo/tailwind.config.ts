import type { Config } from "tailwindcss"

// @ts-expect-error - no types
import nativewind from "nativewind/preset"

import baseConfig from "@deenup/tailwind-config/native"

export default {
	content: ["./src/**/*.{ts,tsx}"],
	presets: [baseConfig, nativewind],
	theme: {
		extend: {
			colors: {
				primary: "#6d28d9",
				"primary-focus": "#410745",
				"primary-content": "#ffffff",

				secondary: "#007ebd",
				"secondary-focus": "#005c8a",
				"secondary-content": "#ffffff",

				accent: "#f8860d",
				"accent-focus": "#cb6c06",
				"accent-content": "#ffffff",

				neutral: "#1e2734",
				"neutral-focus": "#111827",
				"neutral-content": "#ffffff",

				outstand: "#005c8a",
				"outstand-focus": "#00cc00",
				"outstand-content": "#ffffff",

				"base-100": "#ffffff",
				"base-200": "#f9fafb",
				"base-300": "#ced3d9",
				"base-content": "#1e2734",

				info: "#1c92f2",
				success: "#009485",
				warning: "#ff9900",
				error: "#ff5724",

				// Additional Colors
				pink: "#ff69b4",
				teal: "#008080",
				purple: "#800080",
				gold: "#ffd700",
				silver: "#c0c0c0",
				bronze: "#cd7f32",
			},
		},
	},
} satisfies Config
