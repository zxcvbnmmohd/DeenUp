import { useCallback, useEffect, useState } from "react"

type State = {
	timeInSeconds: number
	intervalId: NodeJS.Timeout | null
}

type Return = {
	seconds: number
	minutes: number
	start: () => void
	pause: () => void
	stop: () => void
}

const useTimer = (): Return => {
	const [values, setValues] = useState<State>({
		timeInSeconds: 0,
		intervalId: null,
	})

	useEffect(() => {
		return () => {
			if (values.intervalId) {
				clearInterval(values.intervalId)
			}
		}
	}, [values.intervalId])

	const pause = useCallback(() => {
		if (values.intervalId) {
			clearInterval(values.intervalId)
			setValues((prevValues) => ({
				...prevValues,
				intervalId: null,
			}))
		}
	}, [values.intervalId])

	return {
		seconds: values.timeInSeconds % 60,
		minutes: Math.floor(values.timeInSeconds / 60),
		start: useCallback(() => {
			setValues((prevValues) => ({
				...prevValues,
				intervalId: setInterval(() => {
					setValues((prevValues) => ({
						...prevValues,
						timeInSeconds: prevValues.timeInSeconds + 1,
					}))
				}, 1000),
			}))
		}, []),
		pause,
		stop: useCallback(() => {
			pause()
			setValues((prevValues) => ({
				...prevValues,
				timeInSeconds: 0,
			}))
		}, [pause]),
	}
}

export default useTimer
