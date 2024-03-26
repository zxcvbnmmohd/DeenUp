import { create } from "zustand"

import type { UserSlice } from "./slices"

import { createUserSlice } from "./slices"

const useUserStore = create<UserSlice>()((...a) => ({
	...createUserSlice(...a),
}))

export default useUserStore
