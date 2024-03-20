import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import { StatusBar } from "expo-status-bar"

import { AnimatePresence, MotiView } from "moti"

import { ForgotPassword, SignIn, SignUp } from "~/components/auth"
import AuthHeader from "~/components/auth/AuthHeader"

type States = {
	isSignUp: boolean
	isForgotPassword: boolean
	step: number
	name: string
}

export default function Auth() {
	const [state, setState] = useState<States>({
		isSignUp: false,
		isForgotPassword: false,
		step: 0,
		name: "",
	})
	const { isSignUp, isForgotPassword, step, name } = state

	const handleToggleSignUp = () => {
		setState((prevState) => ({
			...prevState,
			step: 0,
			isSignUp: !prevState.isSignUp,
			isForgotPassword: false,
		}))
	}

	const handleToggleForgotPassword = () => {
		setState((prevState) => ({
			...prevState,
			step: 0,
			isForgotPassword: !prevState.isForgotPassword,
			isSignUp: false,
		}))
	}

	const motiStyle = StyleSheet.create({
		container: {
			backgroundColor: "#F9FAFB",
			marginTop: -20,
			width: "100%",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "flex-start",
			gap: 6,
			borderRadius: 20,
			borderTopWidth: 1,
			borderColor: "#D1D5DB",
			paddingTop: 26,
			padding: 24,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 4,
			},
			shadowOpacity: 0.3,
			shadowRadius: 4.65,
			elevation: 8,
			position: "relative",
		},
	})

	const styles = {
		header: "h-1/2 flex-1 items-center justify-center bg-primary",
		logo: "text-base-100 text-6xl font-bold",
		closeButton: "size-10 absolute top-12 right-10",
	}

	return (
		<>
			<StatusBar style="light" />
			<View className={styles.header}>
				{!isSignUp && !isForgotPassword && (
					<Text className={styles.logo}>DeenUp</Text>
				)}
			</View>
			<AnimatePresence>
				<MotiView
					delay={200}
					from={{ height: "50%" }}
					animate={{
						height: isSignUp || isForgotPassword ? "95%" : "50%",
					}}
					style={motiStyle.container}
				>
					<AnimatePresence>
						{(isSignUp || isForgotPassword) && (
							<MotiView
								style={{
									height: "22%",
									width: "100%",
									gap: 24,
								}}
								from={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								delay={700}
								key="authHeader"
							>
								<AuthHeader
									key={isSignUp ? "signup" : "forgotpassword"}
									step={step}
									handleBack={() =>
										setState((prevState) => ({
											...prevState,
											step: Math.max(
												0,
												prevState.step - 1,
											),
										}))
									}
									handleToggle={() =>
										isSignUp
											? handleToggleSignUp()
											: handleToggleForgotPassword()
									}
									isSignUp={state.isSignUp}
									name={name}
								/>
							</MotiView>
						)}
						{isSignUp ? (
							<SignUp step={step} setStep={setState} />
						) : isForgotPassword ? (
							<ForgotPassword step={step} setStep={setState} />
						) : (
							<SignIn
								handleToggleSignUp={handleToggleSignUp}
								handleToggleForgotPassword={
									handleToggleForgotPassword
								}
							/>
						)}
					</AnimatePresence>
				</MotiView>
			</AnimatePresence>
		</>
	)
}
