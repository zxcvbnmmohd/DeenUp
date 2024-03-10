import type { ModalProps } from "react-native"

import React from "react"
import {
	KeyboardAvoidingView,
	Platform,
	Modal as RModal,
	View,
} from "react-native"

type Props = ModalProps & {
	isOpen: boolean
	withInput?: boolean
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ isOpen, withInput, children, ...rest }: Props) => {
	const styles = {
		keyoardAvoid: "flex-1 items-center justify-center bg-zinc-900/40 px-3",
		container: "flex-1 items-center justify-center bg-zinc-900/40 px-3",
	}
	const content = withInput ? (
		<KeyboardAvoidingView
			className={styles.keyoardAvoid}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			{children}
		</KeyboardAvoidingView>
	) : (
		<View className={styles.container}>{children}</View>
	)

	return (
		<RModal
			visible={isOpen}
			transparent
			animationType="fade"
			statusBarTranslucent
			{...rest}
		>
			{content}
		</RModal>
	)
}
