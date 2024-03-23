import type { FC } from "react"
import type { ViewStyle } from "react-native"

import { View } from "react-native"

import { MotiView } from "moti"

type SegmentedProgressBarProps = {
	progress: number
	segments: number
	color: string
	backgroundColor?: string
	style?: ViewStyle
	className?: string
}

const SegmentedProgressBar: FC<SegmentedProgressBarProps> = ({
	progress,
	segments,
	color,
	backgroundColor,
	style,
	className,
}) => {
	const segmentStyle: ViewStyle = {
		flex: 1,
		height: 7,
		borderRadius: 10,
		backgroundColor: backgroundColor ?? "transparent",
	}

	const segmentContainerStyle: ViewStyle = {
		flexDirection: "row",
		borderRadius: 10,
		overflow: "hidden",
		gap: 9,
	}

	const filledSegments = Math.floor(progress * segments)

	const segmentsArray = Array.from({ length: segments }, (_, index) => ({
		key: index,
		filled: index < filledSegments,
	}))

	return (
		<View style={[segmentContainerStyle, style]}>
			{segmentsArray.map((segment) => (
				<View
					className={className}
					key={segment.key}
					style={segmentStyle}
				>
					<MotiView
						style={[
							{
								height: "100%",
								width: segment.filled ? "100%" : "0%",
								backgroundColor: color,
								borderRadius: 10,
							},
						]}
						animate={{
							width: segment.filled ? "100%" : "0%",
						}}
						transition={{ type: "timing", duration: 500 }}
					/>
				</View>
			))}
		</View>
	)
}

export default SegmentedProgressBar
