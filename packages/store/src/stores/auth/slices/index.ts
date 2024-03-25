import type { AuthSlice } from "./auth.slice"

import createAuthSlice from "./auth.slice"

type AuthStore = AuthSlice

export type { AuthSlice, AuthStore }
export { createAuthSlice }
