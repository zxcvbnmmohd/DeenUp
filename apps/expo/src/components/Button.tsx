import type { GestureResponderEvent } from "react-native"

import React from "react"
import { Text, TouchableOpacity } from "react-native"

import { tv } from "tailwind-variants"

type Props = {
	label: string
	outline?: boolean
	onPress?: ((event: GestureResponderEvent) => void) | undefined
	color?: "primary" | "secondary"
	size?: "sm" | "md" | "lg"
}

const Button = (props: Props): React.ReactNode => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={props.onPress}
			className={tv({
				base: "h-16 items-center justify-center rounded-2xl bg-violet-700 font-medium text-white shadow-md",
			})()}
		>
			<Text className="text-lg font-bold text-white">{props.label}</Text>
		</TouchableOpacity>
	)
}

export default Button
