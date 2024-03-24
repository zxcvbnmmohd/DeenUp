import type { ReactNode } from "react"

import { StyleSheet, View } from "react-native"

type Props = {
	height?: number
	width?: number
}

const Gap = (props: Props): ReactNode => {
	const styles = StyleSheet.create({
		view: {
			height: props.height,
			width: props.width,
		},
	})

	return <View style={styles.view} />
}

export default Gap
