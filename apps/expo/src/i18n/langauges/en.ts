export default {
	welcome: "Welcome",
	appTitle: "DeenUp",
	hello: "Hello, %{name}",
	homePage: {
		friendsModeButton: "Friends Mode",
		soloMode: "Solo Mode",
		joinGameButton: "Join Game",
	},
	joinGamePage: {
		joinGameSubheader:
			"Enter the lobby code to join a game with your friends",
		joinGameAlert: "Please Enter Valid Code",
		joinGameHeader: "Join Game",
		pasteFromClipboard: "Paste From Clipboard",
		joinGameButton: "Join Game",
	},
	createGamePage: {
		createGameHeader: "Create Game",
		createGameSubheader:
			"Copy and share the lobby code with your friends so they can join you",
		createGameButton: "Create Game",
	},
	authPage: {
		emailInput: "Email Address",
		passwordInput: "Password",
		confirmPasswordInput: "Confirm Password",
		nameInput: "Name",
		alerts: {
			emailRequired: "Email is required",
			passwordRequired: "Password is required",
			nameRequired: "Name is required",
			codeRequired: "Code is required",
			invalidEmail: "Invalid email",
			invalidPassword: "XXXXXXX password",
			invalidName: "Invalid name",
			invalidCode: "Invalid code",
			invalidCodeLength: "Invalid code length",
			invalidCodeCharacters: "Invalid code characters",
		},
		signIn: {
			signInButton: "Sign In",
			signInHeader: "Sign In",
			signInSubheader: "Enter your email and password to sign in",
			forgotPassword: "Forgot Password?",
			signUp: "Sign Up",
			noAccount: "Don't have an account?",
		},
		signUp: {
			nameHeader: "Name",
			nameSubheader: "Let's start with your name",
			emailHeader: "Email",
			emailSubheader: "Hey %{name} 👋, enter your email.",
			passwordHeader: "Password",
			passwordSubheader: "Lastly, a password to keep things safe. 🔐",
			verificationHeader: "Verification",
			verificationSubheader: "Please enter the code we sent to %{email}.",
			continueButton: "Continue 👉",
			submitButton: "Submit",
			verifyButton: "Verify 🕵️",
			backToSignIn: "Back to Sign In",
			successHeader: "All set! 🙌",
			successSubheader: "Your account is ready to use",
		},
		verify: {
			noCodeRecieved:
				"Didn't receive the code? check your spam folder or ",
			resendCode: "Resend Code",
			submitButton: "Verify 🕵️",

			header: "Verify Your Email",
			subheader: "Enter the code we sent to %{email}",
			pasteFromClipboard: "Paste from clipboard",
		},
		forgotPassword: {
			header: "Forgot Password",
			subheader: "Enter your email to reset your password",
			passwordHeader: "Create new password",
			passwordSubheader: "",
			requestReset: "Request Reset",
			submitButton: "Submit",
			successHeader: "All set! 🙌",
			successSubheader: "Your new password is ready to use",
			backToSignIn: "Back to Sign In",
		},
	},
}
