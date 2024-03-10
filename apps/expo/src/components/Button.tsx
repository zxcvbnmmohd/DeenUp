import type { GestureResponderEvent } from "react-native"

import React from "react"
import { Text, TouchableOpacity } from "react-native"

import { tv } from "tailwind-variants"

type Props = {
	className?: string
	color?: "primary" | "secondary" | "tertiary" | "accent" | "outline"
	label: string
	outline?: boolean
	onPress?: ((event: GestureResponderEvent) => void) | undefined
	size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}

const Button = (props: Props): React.ReactNode => {
	const buttonVariant = tv({
		base: "items-center justify-center rounded-xl shadow-md",
		variants: {
			color: {
				primary: "bg-primary",
				secondary: "bg-secondary",
				tertiary: "bg-tertiary",
				accent: "bg-accent",
				outline: "border border-primary bg-white",
			},
			size: {
				sm: "h-6 w-2/3 px-3 text-sm",
				md: "h-12 w-2/3 px-4 text-base",
				lg: "h-16 w-4/5 text-lg",
				xl: "h-20 w-full text-xl",
				"2xl": "h-24 text-2xl",
				"3xl": "h-28 text-3xl",
			},
		},
		defaultVariants: {
			size: "md",
		},
	})
	const textVariant = tv({
		base: "text-center",
		variants: {
			size: {
				sm: "text-sm font-medium",
				md: "text-base font-bold",
				lg: "text-lg font-extrabold",
				xl: "text-xl font-extrabold",
				"2xl": "text-2xl",
				"3xl": "text-3xl",
				"4xl": "text-4xl",
				"5xl": "text-5xl",
			},
			color: {
				primary: "text-white",
				secondary: "text-white",
				tertiary: "text-white",
				accent: "text-white",
				outline: "text-primary",
				white: "text-black",
			},
		},
	})
	const buttonStyle = buttonVariant({ color: props.color, size: props.size })
	const textStyle = textVariant({ size: props.size, color: props.color })

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={props.onPress}
			className={buttonStyle + " " + props.className}
		>
			<Text className={textStyle}>{props.label}</Text>
		</TouchableOpacity>
	)
}

export default Button
