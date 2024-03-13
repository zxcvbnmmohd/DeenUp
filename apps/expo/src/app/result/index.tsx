import type { ReactNode } from "react"

import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Link, router, Stack } from "expo-router"

import AntIcons from "@expo/vector-icons/AntDesign"
import LottieView from "lottie-react-native"

import type { GameStore } from "~/stores"

import Trophy from "~/assets/lottie/result-trophy.json"
import { Button } from "~/components"
import { useGameStore } from "~/stores"

type StatItemProps = {
	styles: {
		container: string
		header: string
		value: string
	}
	label: string
	value: string | number
}

export default function Page(): ReactNode {
	const styles = {
		body: "flex size-full flex-col items-center justify-around",
		headerContainer: "flex w-full flex-row items-end justify-between p-4",
		headerText: "ml-6 text-2xl font-bold",
		statsContainer:
			"mt-96 flex w-full flex-row items-center justify-center px-10",
		bottomButtonsContainer: "flex h-14 flex-row gap-3 px-12",
		checkAnswersButton: "absolute bottom-4 mx-10 rounded-xl",
		shareButton:
			"flex size-16  items-center justify-center rounded-3xl border-4 border-gray-300",
		animationContainer:
			"absolute -z-10 flex size-full items-center  justify-start",
		animationContainerBackground:
			"absolute top-40 size-96 rounded-3xl bg-primary",
		statItem: {
			container: "mb-6 flex items-start gap-4",
			header: "text-base font-semibold text-gray-400",
			value: "text-2xl font-bold",
		},
	}
	const questions = useGameStore((state: GameStore) => state.questions)
	const correctQuestions = useGameStore(
		(state: GameStore) => state.correctQuestions,
	)
	const incorrectQuestions = useGameStore(
		(state: GameStore) => state.incorrectQuestions,
	)
	const skippedQuestions = useGameStore(
		(state: GameStore) => state.skippedQuestions,
	)
	const resetSoloSession = useGameStore(
		(state: GameStore) => state.resetSoloSession,
	)

	const totalQuestions = questions.length

	return (
		<SafeAreaView>
			<Stack.Screen options={{ title: "Results" }} />
			<View className={styles.animationContainer}>
				<View className={styles.animationContainerBackground}>
					<Button
						className={styles.checkAnswersButton}
						size="lg"
						label="Check Correct Answer"
						color="accent"
						onPress={() => {
							console.log("correct")
							router.push("/")
						}}
					/>
				</View>
				<LottieView
					source={Trophy}
					loop={false}
					autoPlay
					style={{
						width: 500,
						height: 500,
						aspectRatio: "auto",
					}}
				/>
			</View>
			<View className={styles.body}>
				<View className={styles.headerContainer}>
					<View></View>
					<Text className={styles.headerText}>Congratulations!</Text>
					<Link href="/" asChild>
						<Pressable>
							<AntIcons name="close" color={"indigo"} size={25} />
						</Pressable>
					</Link>
				</View>

				<View className={styles.statsContainer}>
					<View className="w-1/2 ">
						<StatItem
							styles={styles.statItem}
							label="CORRECT ANSWER"
							value={correctQuestions.length + " questions"}
						/>
						<StatItem
							styles={styles.statItem}
							label="SKIPPED"
							value={skippedQuestions.length}
						/>
					</View>
					<View className="w-1/2">
						<StatItem
							styles={styles.statItem}
							label="TOTAL QUESTIONS"
							value={totalQuestions}
						/>

						<StatItem
							styles={styles.statItem}
							label="INCORRECT ANSWER"
							value={incorrectQuestions.length + " questions"}
						/>
					</View>
				</View>
				<View className={styles.bottomButtonsContainer}>
					<Button
						className=""
						color="primary"
						size="lg"
						label="Done"
						onPress={() => {
							resetSoloSession()
							router.push("/")
						}}
					/>

					<Pressable className={styles.shareButton}>
						<AntIcons name="sharealt" color={"black"} size={25} />
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	)
}

const StatItem: React.FC<StatItemProps> = ({ styles, label, value }) => (
	<View className={styles.container}>
		<Text className={styles.header}>{label}</Text>
		<Text className={styles.value}>{value}</Text>
	</View>
)
