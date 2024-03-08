import type { ReactNode } from "react"

import { StyleSheet, Text, View } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"

import { useTheme } from "~/hooks"

interface Props {
	minute: number
	second: number
}

const Timer = (props: Props): ReactNode => {
	const { minute, second } = props

	const { theme } = useTheme()
	const styles = StyleSheet.create({
		view: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			paddingHorizontal: 10.0,
			paddingVertical: 5.0,
			backgroundColor: "transparent",
			borderColor: theme.colors.surface,
			borderWidth: 1.5,
			borderRadius: 5.0,
			width: 100.0,
		},
		text: {
			color: theme.colors.surface,
			fontSize: 18.0,
			fontWeight: "bold",
		},
	})

	return (
		<View style={styles.view}>
			<MaterialCommunityIcons
				name="alarm"
				size={20}
				color={theme.colors.surface}
			/>
			<Text style={styles.text}>
				{minute.toString().length === 1 ? `0${minute}` : minute}:
				{second.toString().length === 1 ? `0${second}` : second}
			</Text>
		</View>
	)
}

export default Timer
