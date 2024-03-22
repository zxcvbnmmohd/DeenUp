import type { TextInput } from "react-native"

import React, { useRef, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import * as Clipboard from "expo-clipboard"

import { Button } from "~/components"
import { useSettingsStore } from "~/stores"

import CodeInput from "./CodeInput"

type States = {
	inputCode: string[]
}
type Props = {
	setCode: React.Dispatch<React.SetStateAction<string>>
	error: string
}

const Verify = ({ error, setCode }: Props) => {
	const CODE_LENGTH = 6
	const translate = useSettingsStore((state) => state.translate)

	const [states, setStates] = useState<States>({
		inputCode: Array(CODE_LENGTH).fill("") as string[],
	})

	const inputRefs = useRef<(TextInput | null)[]>([])

	const handleCodeChange = (text: string, index: number) => {
		const newCode = [...states.inputCode]
		newCode[index] = text

		setStates((states) => ({
			...states,
			inputCode: newCode,
		}))

		if (text === "" && index > 0) {
			inputRefs.current[index - 1]?.focus()
		} else if (text !== "" && index < CODE_LENGTH - 1) {
			inputRefs.current[index + 1]?.focus()
		}

		if (text.length > 1) {
			const codeArray = text.split("")

			codeArray.forEach((value: string, index: number) => {
				if (index < CODE_LENGTH) {
					newCode[index] = value
				}
			})

			setStates((states) => ({
				...states,
				inputCode: newCode,
			}))
		}

		if (text.length === 0 && index > 0) {
			inputRefs.current[index - 1]?.focus()
		}

		setCode(newCode.join(""))
	}

	const handlePasteFromClipboard = async () => {
		try {
			const text: string = await Clipboard.getStringAsync()
			const newCode: string[] = [...states.inputCode]
			const sourceText =
				text.length > CODE_LENGTH
					? text.substring(0, CODE_LENGTH)
					: text

			sourceText.split("").forEach((value, index) => {
				newCode[index] = value
			})

			setStates((states) => ({
				...states,
				inputCode: newCode,
			}))
		} catch (error) {
			console.error("Error pasting from clipboard:", error)
		}
	}
	const styles = {
		signUpText: "font-bold text-primary",
		errorText: "text-red-500",
	}

	return (
		<View className="w-full items-center justify-center gap-6">
			<CodeInput
				code={states.inputCode}
				handleCodeChange={handleCodeChange}
				inputRefs={inputRefs}
				inputClass="w-12 h-14"
			/>
			{error && <Text className={styles.errorText}>{error}</Text>}
			<Text className="w-full text-center text-lg text-gray-500">
				{translate("authPage.verify.noCodeRecieved")}
				<TouchableOpacity>
					<Text className={styles.signUpText}>
						{translate("authPage.verify.resendCode")}
					</Text>
				</TouchableOpacity>
			</Text>
			<View className="w-full flex-1 items-center justify-start gap-4">
				<Button
					color="outline"
					size="sm"
					label={translate("authPage.verify.pasteFromClipboard")}
					onPress={handlePasteFromClipboard}
				/>
			</View>
		</View>
	)
}

export default Verify
