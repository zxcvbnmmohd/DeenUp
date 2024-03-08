import type { ReactNode } from "react"

import { StyleSheet, View } from "react-native"

const Spacer = (): ReactNode => {
	const styles = StyleSheet.create({
		view: {
			flex: 1,
		},
	})

	return <View style={styles.view} />
}

export default Spacer
