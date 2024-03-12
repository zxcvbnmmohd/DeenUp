import React, { useRef, useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import * as Clipboard from "expo-clipboard"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"

import { MaterialCommunityIcons } from "@expo/vector-icons"

import { Button } from "~/components"
import { useGameStore } from "~/stores"

type CodeInputProps = {
	code: string[]
	handleCodeChange: (text: string, index: number) => void
	inputRefs: React.MutableRefObject<(TextInput | null)[]>
}

export default function CreateGame() {
	const codeLength = 8
	const leaveLobby = useGameStore((state) => state.leaveLobby)
	const [inputCode, setInputCode] = useState<string[]>(
		Array(codeLength).fill(""),
	)

	const inputRefs = useRef<(TextInput | null)[]>([])

	const handleExit = () => {
		leaveLobby()
		router.dismiss()
	}
	const handleCodeChange = (text: string, index: number) => {
		const newCode = [...inputCode]
		newCode[index] = text
		setInputCode(newCode)
		if (text === "" && index > 0) {
			inputRefs.current[index - 1]?.focus()
		} else if (text !== "" && index < codeLength - 1) {
			inputRefs.current[index + 1]?.focus()
		}

		if (text.length > 1) {
			const codeArray = text.split("")
			codeArray.forEach((value: string, index: number) => {
				if (index < codeLength) {
					newCode[index] = value
				}
			})
			setInputCode(newCode)
		}

		if (text.length === 0 && index > 0) {
			inputRefs.current[index - 1]?.focus()
		}
	}

	const handleContinue = () => {
		if (inputCode.some((digit) => digit === "")) {
			alert("Please fill in all the digits")

			return
		}

		alert(`Continue with: ${inputCode.join("")}`)
	}

	const handlePasteFromClipboard = async () => {
		try {
			const text: string = await Clipboard.getStringAsync()
			const newCode: string[] = [...inputCode]

			if (text.length > codeLength) {
				const clippedText = text.substring(0, codeLength)
				clippedText.split("").forEach((value, index) => {
					newCode[index] = value
				})
			} else {
				text.split("").forEach((value, index) => {
					newCode[index] = value
				})
			}

			setInputCode(newCode)
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
						<Text className={styles.headerText}>Join A Game</Text>
						<Text className={styles.subheaderText}>
							Enter the lobby code to join a game with your
							friends
						</Text>
					</View>
				</View>
				<View className={styles.codeContainer}>
					<View className={styles.codeInputContainer}>
						<CodeInput
							code={inputCode}
							handleCodeChange={handleCodeChange}
							inputRefs={inputRefs}
						/>
					</View>
					<View className={styles.buttonContainer}>
						<Button
							onPress={handlePasteFromClipboard}
							size="sm"
							color="base"
							label="Paste From Clipboard"
						/>
						<Button
							onPress={handleContinue}
							size="lg"
							color="primary"
							label="Continue"
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const CodeInput = ({ code, handleCodeChange, inputRefs }: CodeInputProps) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const handleFocus = (index: number) => {
		setActiveIndex(index)
	}

	const handleBlur = () => {
		setActiveIndex(null)
	}
	const styles = {
		container: "flex flex-row items-center justify-center gap-2 px-2 py-8",
		input: "h-14 w-12 bg-base-200 rounded-lg border border-gray-300 bg-white p-2 text-center text-xl shadow-sm",
	}

	return (
		<View className={styles.container}>
			{code.map((digit, index) => (
				<TextInput
					key={index}
					ref={(ref) => (inputRefs.current[index] = ref)}
					keyboardType="default"
					autoCapitalize="none"
					className={
						styles.input +
						" " +
						(activeIndex === index ? "border-info" : "")
					}
					value={digit}
					onChangeText={(text) => handleCodeChange(text, index)}
					onFocus={() => handleFocus(index)}
					onBlur={handleBlur}
					onKeyPress={({ nativeEvent }) => {
						if (
							nativeEvent.key === "Backspace" &&
							digit.length === 0 &&
							index > 0
						) {
							inputRefs.current[index - 1]?.focus()
						}
					}}
				/>
			))}
		</View>
	)
}
