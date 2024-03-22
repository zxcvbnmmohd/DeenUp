import { useState } from "react"
import { TextInput, View } from "react-native"

import { twMerge } from "tailwind-merge"

type Props = {
	code: string[]
	handleCodeChange: (text: string, index: number) => void
	inputRefs: React.MutableRefObject<(TextInput | null)[]>
	inputClass?: string
}

const CodeInput = ({
	code,
	handleCodeChange,
	inputRefs,
	inputClass,
}: Props) => {
	const [index, setIndex] = useState<number | null>(null)

	const styles = {
		container: twMerge("flex flex-row items-center justify-center gap-2"),
		input: twMerge(
			"bg-base-200 rounded-lg border border-gray-300 bg-white text-center text-xl shadow-sm",
			inputClass,
		),
	}

	const handleFocus = (index: number) => setIndex(index)
	const handleBlur = () => setIndex(null)

	return (
		<View className={styles.container}>
			{code.map((digit, idx) => (
				<TextInput
					key={idx}
					ref={(ref) => (inputRefs.current[idx] = ref)}
					keyboardType="default"
					autoCapitalize="none"
					className={twMerge(
						styles.input,
						index === idx && "border-info",
					)}
					value={digit}
					onChangeText={(text) => handleCodeChange(text, idx)}
					onFocus={() => handleFocus(idx)}
					onBlur={handleBlur}
					maxLength={1}
					onKeyPress={({ nativeEvent }) => {
						if (
							nativeEvent.key === "Backspace" &&
							digit.length === 0 &&
							idx > 0
						) {
							inputRefs.current[idx - 1]?.focus()
						}
					}}
				/>
			))}
		</View>
	)
}

export default CodeInput
