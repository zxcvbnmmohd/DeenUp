import type { DocumentType } from "@aws-amplify/core/internals/utils"
import type { GraphQLResult, GraphQLSubscription } from "aws-amplify/api"
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
	subscribe = <Type>(
		onDataReceived: (data: any) => void,
		onError: (error: unknown) => void,
		query: string | DocumentNode,
		variables?: Record<string, DocumentType>,
	): Promise<GraphQLSubscription<Type> | undefined> => {
		try {
			const response = this.client
				.graphql<GraphQLSubscription<GraphQLResult>>({
					query,
					variables,
				})
				.subscribe({
					next: (data) => onDataReceived(data),
					error: (error) => onError(error),
				})

			//@ts-ignore
			return response
		} catch (error) {
			console.log("Error")

			//@ts-ignore
			return null
		} finally {
			console.log("Finally")
		}
	}
}
