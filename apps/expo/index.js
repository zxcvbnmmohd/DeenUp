import "expo-router/entry"

import { Amplify } from "aws-amplify"

import amplifyconfig from "~/amplifyconfiguration.json"

Amplify.configure(amplifyconfig)
