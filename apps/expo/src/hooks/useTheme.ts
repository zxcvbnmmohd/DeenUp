import { useCallback, useEffect, useState } from "react"

import AsyncStorage from "@react-native-async-storage/async-storage"

import type { Theme } from "~/types"

import { Constants, Themes } from "~/configs"

enum ThemeMode {
	LIGHT,
	DARK,
}

type State = {
	mode: ThemeMode
	theme: Theme
	loading: boolean
	error: string | null
}

type Return = State & {
	switchTheme: () => Promise<void>
}

const useTheme = (): Return => {
	const [state, setState] = useState<State>({
		mode: ThemeMode.LIGHT,
		theme: Themes.light,
		loading: true,
		error: null,
	})

	const switchTheme = useCallback(async () => {
		const newMode =
			state.mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT

		try {
			await AsyncStorage.setItem(Constants.kThemeMode, newMode.toString())
			setState((prevState) => ({
				...prevState,
				mode: newMode,
				theme: newMode === ThemeMode.LIGHT ? Themes.light : Themes.dark,
			}))
		} catch (error) {
			console.error("Failed to save theme mode to AsyncStorage:", error)
			setState((prevState) => ({
				...prevState,
				error: "Failed to save theme mode to AsyncStorage",
			}))
		}
	}, [state.mode])

	useEffect(() => {
		const getInitialState = async () => {
			try {
				const savedMode = await AsyncStorage.getItem(
					Constants.kThemeMode,
				)

				if (savedMode) {
					const mode =
						savedMode === ThemeMode.DARK.toString()
							? ThemeMode.DARK
							: ThemeMode.LIGHT

					setState((prevState) => ({
						...prevState,
						mode,
						theme:
							mode === ThemeMode.LIGHT
								? Themes.light
								: Themes.dark,
						error: null,
					}))
				}

				setState((prevState) => ({
					...prevState,
					loading: false,
				}))
			} catch (error) {
				console.error(
					"Failed to get theme mode from AsyncStorage:",
					error,
				)

				setState((prevState) => ({
					...prevState,
					loading: false,
					error: "Failed to get theme mode from AsyncStorage",
				}))
			}
		}

		getInitialState().catch((error) => console.error(error))
	}, [])

	return { ...state, switchTheme }
}

export default useTheme
