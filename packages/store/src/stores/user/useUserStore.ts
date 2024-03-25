import { create } from "zustand"

import type { SharedSlice } from "./slices"

import { createUserSlice } from "./slices"

const useUserStore = create<SharedSlice>()((...a) => ({
	...createUserSlice(...a),
}))

export default useUserStore
