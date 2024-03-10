import type { GestureResponderEvent } from "react-native"

import React from "react"
import { Text, TouchableOpacity } from "react-native"

import { tv } from "tailwind-variants"

type Props = {
	className?: string
	color?: "primary" | "secondary" | "outline"
	label: string
	outline?: boolean
	onPress?: ((event: GestureResponderEvent) => void) | undefined
	size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}

const Button = (props: Props): React.ReactNode => {
	const buttonVariant = tv({
		base: "items-center justify-center rounded-2xl shadow-md",
		variants: {
			color: {
				primary: "bg-primary text-white",
				secondary: "bg-secondary text-white",
				outline: "border border-primary bg-white text-primary",
			},
			size: {
				sm: "h-6 px-3 text-sm",
				md: "px-4 text-base",
				lg: "h-16 text-lg",
				xl: "h-20 text-xl",
				"2xl": "h-24 text-2xl",
				"3xl": "h-28 text-3xl",
			},
			text: {
				sm: "text-sm font-medium",
				md: "text-base font-medium",
				lg: "text-lg font-medium",
				xl: "text-xl font-medium",
				"2xl": "text-2xl font-medium",
				"3xl": "text-3xl font-medium",
			},
		},
		defaultVariants: {
			color: "primary",
			size: "md",
		},
	})

	const buttonStyle = buttonVariant({ color: props.color, size: props.size })
	const textStyle = buttonVariant({ text: props.size })

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={props.onPress}
			className={buttonStyle}
		>
			<Text className={textStyle}>{props.label}</Text>
		</TouchableOpacity>
	)
}

export default Button
