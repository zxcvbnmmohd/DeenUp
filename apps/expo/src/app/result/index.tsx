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
	label: string
	value: string | number
}

export default function Page(): ReactNode {
	const styles = {
		body: "flex size-full flex-col items-center justify-between",
		headerContainer: "flex w-full flex-row items-end justify-between p-4",
		headerText: "ml-6 text-2xl font-bold",
		statsContainer:
			"mt-96 flex w-full flex-row items-center justify-center px-10",
		bottomBtnsContainer: "flex h-14 flex-row gap-3 px-12",
		checkAnswersBtn: "absolute bottom-4 mx-10 rounded-xl",
		shareButton:
			"flex size-16  items-center justify-center rounded-3xl border-4 border-gray-300",
		animationContainer:
			"absolute -z-10 flex size-full items-center  justify-start",
		animationContainerBg: "absolute top-40 size-96 rounded-3xl bg-primary",
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

	const completedQuestions =
		correctQuestions.length + incorrectQuestions.length
	const totalQuestions = questions.length
	const completion = Math.round((completedQuestions / totalQuestions) * 100)

	return (
		<SafeAreaView>
			<Stack.Screen options={{ title: "Results" }} />

			<View className={styles.animationContainer}>
				<View className={styles.animationContainerBg}>
					<Button
						className={styles.checkAnswersBtn}
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
							label="CORRECT ANSWER"
							value={correctQuestions.length + " questions"}
						/>
						<StatItem
							label="SKIPPED"
							value={skippedQuestions.length}
						/>
					</View>
					<View className="w-1/2">
						<StatItem label="COMPLETION" value={completion + "%"} />
						<StatItem
							label="INCORRECT ANSWER"
							value={incorrectQuestions.length + " questions"}
						/>
					</View>
				</View>
				<View className={"flex h-14 flex-row gap-3 px-12"}>
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

const StatItem: React.FC<StatItemProps> = ({ label, value }) => (
	<View className="mb-6 flex items-start gap-4 ">
		<Text className="text-base font-semibold text-gray-400">{label}</Text>
		<Text className="text-2xl font-bold">{value}</Text>
	</View>
)
