import { create } from "zustand"

import type { AuthSlice } from "./slices"

import { createAuthSlice } from "./slices"

const useAuthStore = create<AuthSlice>()((...a) => ({
	...createAuthSlice(...a),
}))

export default useAuthStore
