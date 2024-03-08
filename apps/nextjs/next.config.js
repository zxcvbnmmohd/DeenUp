import { fileURLToPath } from "url"

import _jiti from "jiti"

const jiti = _jiti(fileURLToPath(import.meta.url))

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
jiti("./src/env")
jiti("@deenup/auth/env")

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,

	/** Enables hot reloading for local packages without a build step */
	transpilePackages: [
		"@deenup/api",
		"@deenup/auth",
		"@deenup/db",
		"@deenup/ui",
		"@deenup/validators",
	],

	/** We already do linting and typechecking as separate tasks in CI */
	eslint: { ignoreDuringBuilds: true },
	typescript: { ignoreBuildErrors: true },
}

export default config
