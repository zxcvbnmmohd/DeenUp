import type { LinkProps } from "expo-router/build/link/Link"

import React from "react"
import { Text, View } from "react-native"

import { Link } from "expo-router"

type Props = {
	label: string
	outline?: boolean
} & LinkProps

const NavButton = (props: Props): React.ReactNode => {
	const tailwindStyles = `
    h-16 items-center justify-center rounded-2xl shadow-md
    ${props.outline ? "border-primary border-3.5" : ""}
  `
	const textStyles = `
    text-lg font-bold
    ${props.outline ? "text-primary" : "text-white"}
  `

	return (
		<View className={props.className + " " + tailwindStyles}>
			<Link
				href={props.href}
				replace={props.replace}
				asChild={props.asChild}
			>
				<Text className={textStyles}>{props.label}</Text>
			</Link>
		</View>
	)
}

export default NavButton
