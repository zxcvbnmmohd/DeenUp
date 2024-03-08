import type { ReactNode } from "react"

import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Link, Stack } from "expo-router"

import AntIcons from "@expo/vector-icons/AntDesign"
import LottieView from "lottie-react-native"

import Trophy from "~/assets/lottie/result-trophy.json"
import { NavButton } from "~/components"

interface StatItemProps {
	label: string
	value: string | number
}

export default function Page(): ReactNode {
	return (
		<SafeAreaView className="relative flex-1 bg-[#1F104A]">
			<Stack.Screen options={{ title: "Results" }} />

			<View
				style={{
					alignItems: "center",
				}}
				className="absolute -z-10 flex size-full items-center  justify-start "
			>
				<View className="absolute top-40 size-96 rounded-3xl bg-red-400">
					<NavButton
						label="Check Correct Answer"
						href={"/"}
						className="absolute bottom-8 w-72 self-center rounded-2xl bg-red-300 shadow-none"
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
			<View className="flex size-full flex-col items-center justify-between  ">
				<View className="flex w-full flex-row items-end justify-between  p-4">
					<View></View>
					<Text className="ml-6 text-2xl font-bold">
						Congratulations!
					</Text>
					<Link href="/" asChild>
						<Pressable>
							<AntIcons name="close" color={"indigo"} size={25} />
						</Pressable>
					</Link>
				</View>

				<View className="mt-96 flex w-full flex-row items-center justify-center px-10 ">
					<View className="w-1/2 ">
						<StatItem label="CORRECT ANSWER" value="7 questions" />
						<StatItem label="SKIPPED" value={0} />
					</View>
					<View className="w-1/2">
						<StatItem label="COMPLETION" value="80%" />
						<StatItem label="INCORRECT ANSWER" value={7} />
					</View>
				</View>
				<View className="flex h-14 w-full flex-row gap-3 px-10">
					<NavButton
						className="flex-1 bg-violet-700"
						label="Done"
						href={"/"}
					/>
					<Pressable className="flex size-16  items-center justify-center  rounded-3xl border-4 border-gray-300  ">
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
