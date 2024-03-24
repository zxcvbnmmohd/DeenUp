import { Text, TouchableOpacity } from "react-native"
import { ActivityIndicator } from "react-native-paper"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

type ButtonColor =
	| "primary"
	| "secondary"
	| "tertiary"
	| "accent"
	| "outline"
	| "base"
	| "link"

type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

type ButtonIconProps = {
	name: keyof typeof MaterialCommunityIcons.glyphMap
	size?: number
	color?: string
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
	name,
	size = 24,
	color = "white",
}) => {
	return <MaterialCommunityIcons name={name} size={size} color={color} />
}

type ButtonTextProps = {
	label: string
	color?: ButtonColor
	size?: ButtonSize
	textStyle?: string
}

const ButtonText: React.FC<ButtonTextProps> = ({
	label,
	color = "primary",
	size = "md",
	textStyle,
}) => {
	const styles = {
		textStyle: tv({
			base: "text-center",
			variants: {
				size: {
					sm: "text-base font-medium",
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
					base: "text-black",
					link: "text-primary",
				},
			},
		}),
	}

	return (
		<Text className={twMerge(styles.textStyle({ color, size }), textStyle)}>
			{label}
		</Text>
	)
}

type ButtonProps = {
	label?: string
	iconName?: keyof typeof MaterialCommunityIcons.glyphMap
	onPress?: () => void
	color?: ButtonColor
	size?: ButtonSize
	disabled?: boolean
	textStyle?: string
	buttonStyle?: string
	iconSize?: number
	iconColor?: string
	isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
	label,
	iconName,
	onPress,
	color = "primary",
	size = "md",
	disabled = false,
	textStyle,
	buttonStyle,
	iconSize,
	iconColor,
	isLoading = false,
}) => {
	const styles = {
		buttonStyle: tv({
			base: "items-center justify-center rounded-xl shadow-md",
			variants: {
				color: {
					primary: "bg-primary",
					secondary: "bg-secondary",
					tertiary: "bg-tertiary",
					accent: "bg-accent",
					outline: "border border-primary bg-white",
					base: "bg-base-100",
					link: "bg-transparent",
				},
				size: {
					sm: "h-11 px-3 text-sm",
					md: "h-12 px-4 text-base",
					lg: "h-16 text-lg",
					xl: "h-20 text-xl",
					"2xl": "h-24 text-2xl",
					"3xl": "h-28 text-3xl",
				},
			},
			defaultVariants: {
				size: "md",
			},
		}),
	}

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			disabled={disabled}
			className={twMerge(
				styles.buttonStyle({ color, size }),
				buttonStyle,
			)}
		>
			{isLoading ? (
				<ActivityIndicator color="white" />
			) : (
				<>
					{iconName && (
						<ButtonIcon
							name={iconName}
							size={iconSize}
							color={iconColor}
						/>
					)}
					{label && (
						<ButtonText
							label={label}
							color={color}
							size={size}
							textStyle={textStyle}
						/>
					)}
				</>
			)}
		</TouchableOpacity>
	)
}

export default Button
