import type { TextInput } from "react-native"

import React, { useRef, useState } from "react"
import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import * as Clipboard from "expo-clipboard"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"

import { MaterialCommunityIcons } from "@expo/vector-icons"

import { Button } from "~/components"
import CodeInput from "~/components/auth/CodeInput"
import { useGameStore, useSettingsStore } from "~/stores"

// type CodeInputProps = {
// 	code: string[]
// 	handleCodeChange: (text: string, index: number) => void
// 	inputRefs: React.MutableRefObject<(TextInput | null)[]>
// }

type States = {
	inputCode: string[]
}

export default function CreateGame() {
	const CODE_LENGTH = 8
	const translate = useSettingsStore((state) => state.translate)
	const leaveLobby = useGameStore((state) => state.leaveLobby)
	const joinLobby = useGameStore((state) => state.joinLobby)

	const [states, setStates] = useState<States>({
		inputCode: Array(CODE_LENGTH).fill("") as string[],
	})

	const inputRefs = useRef<(TextInput | null)[]>([])

	const handleExit = () => {
		leaveLobby()
		router.dismiss()
	}

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
	}

	const handleContinue = () => {
		const inputCode = states.inputCode

		if (inputCode.some((digit) => digit === "")) {
			alert(translate("joinGameAlert"))

			return
		}

		joinLobby(inputCode.join(""))
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
		container: "flex justify-center bg-primary",
		headerContainer: "absolute left-10 top-4 flex flex-row w-2/3 gap-6",
		headerText: "text-3xl font-bold text-white",
		subheaderText: "text-base-200",
		codeContainer:
			"flex h-full items-center justify-start bg-white bg-gray-100  rounded-lg rounded-t-3xl mt-72 pt-20 gap-8",
		codeText: "text-xl font-bold",
		buttonContainer:
			"flex flex-col items-center justify-center w-full gap-6",
		backButton:
			"flex items-center justify-center bg-base-100 border border-primary p-4 rounded-full  h-16",
		shareButton:
			"flex items-center justify-center bg-base-100 border border-primary p-4 rounded-full",
		codeInputContainer: "flex flex-row items-center justify-center gap-2",
		codeDigitBox: "bg-gray-200 rounded-md m-1 p-4",
		joinGameButton: "w-2/3",
	}

	return (
		<SafeAreaView
			style={{
				backgroundColor: "#6D28D9",
			}}
		>
			<StatusBar style="light" />
			<View className={styles.container}>
				<View className={styles.headerContainer}>
					<Pressable
						onPress={handleExit}
						className={styles.backButton}
					>
						<MaterialCommunityIcons
							name="chevron-left"
							size={24}
							color="#6D28D9"
						/>
					</Pressable>
					<View>
						<Text className={styles.headerText}>
							{translate("joinGamePage.joinGameHeader")}
						</Text>
						<Text className={styles.subheaderText}>
							{translate("joinGamePage.joinGameSubheader")}
						</Text>
					</View>
				</View>
				<View className={styles.codeContainer}>
					<View className={styles.codeInputContainer}>
						<CodeInput
							code={states.inputCode}
							handleCodeChange={handleCodeChange}
							inputRefs={inputRefs}
							inputClass="w-10 h-16"
						/>
					</View>
					<View className={styles.buttonContainer}>
						<Button
							color="base"
							size="sm"
							label={translate("joinGamePage.pasteFromClipboard")}
							onPress={handlePasteFromClipboard}
						/>
						<Button
							color="primary"
							size="lg"
							label={translate("joinGamePage.joinGameButton")}
							onPress={handleContinue}
							className={styles.joinGameButton}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

// const CodeInput = ({ code, handleCodeChange, inputRefs }: CodeInputProps) => {
// 	const [activeIndex, setActiveIndex] = useState<number | null>(null)

// 	const handleFocus = (index: number) => {
// 		setActiveIndex(index)
// 	}

// 	const handleBlur = () => {
// 		setActiveIndex(null)
// 	}

// 	const styles = {
// 		container: "flex flex-row items-center justify-center gap-2 px-1 py-8",
// 		input: "h-14 w-11 bg-base-200 rounded-lg border border-gray-300 bg-white p-2 text-center text-xl shadow-sm",
// 	}

// 	return (
// 		<View className={styles.container}>
// 			{code.map((digit, index) => (
// 				<TextInput
// 					key={index}
// 					ref={(ref) => (inputRefs.current[index] = ref)}
// 					keyboardType="default"
// 					autoCapitalize="none"
// 					className={
// 						styles.input +
// 						" " +
// 						(activeIndex === index ? "border-info" : "")
// 					}
// 					value={digit}
// 					onChangeText={(text) => handleCodeChange(text, index)}
// 					onFocus={() => handleFocus(index)}
// 					onBlur={handleBlur}
// 					maxLength={1}
// 					onKeyPress={({ nativeEvent }) => {
// 						if (
// 							nativeEvent.key === "Backspace" &&
// 							digit.length === 0 &&
// 							index > 0
// 						) {
// 							inputRefs.current[index - 1]?.focus()
// 						}
// 					}}
// 				/>
// 			))}
// 		</View>
// 	)
// }
