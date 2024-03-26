import type { DocumentType } from "@aws-amplify/core/internals/utils"
import type { DocumentNode } from "graphql"

import { generateClient } from "aws-amplify/api"

export default class GraphQLService {
	private readonly client = generateClient()

	query = async (
		query: string | DocumentNode,
		variables?: Record<string, DocumentType>,
	): Promise<any> => {
		try {
			const response = await this.client.graphql({
				query,
				variables,
			})

			return response
		} catch (error: unknown) {
			console.log(error)

			return null
		}
	}

	mutate = async (
		query: string | DocumentNode,
		variables?: Record<string, DocumentType>,
	): Promise<any> => {
		try {
			const response = await this.client.graphql({
				query,
				variables,
			})

			return response
		} catch (error) {
			console.log("Error")

			return null
		}
	}
	// subscribe = async <T>(
	// 	onDataReceived: (data: any) => void,
	// 	onError: (error: unknown) => void,
	// 	query: string | DocumentNode,
	// 	variables?: Record<string, DocumentType>,
	// ): Promise<GraphQLSubscription<T> | undefined> => {
	// 	try {
	// 		const subscription = await this.client
	// 			.graphql<GeneratedSubscription<T>>({
	// 				query,
	// 				variables,
	// 			})
	// 			.subscribe({
	// 				next: (data: unknown) => onDataReceived(data), // Avoid unnecessary type casting
	// 				error: onError,
	// 			})

	// 		return subscription
	// 	} catch (error) {
	// 		console.error("Error subscribing:", error)

	// 		return undefined
	// 	}
	// }
}
