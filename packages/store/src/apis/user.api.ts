import type { GraphQLResult } from "aws-amplify/api"

import { generateClient } from "aws-amplify/api"

import type { API } from "../graphql"

import { Mutation, Query, Subscription } from "../graphql"
import { GraphQLService, StorageService } from "../services"

export default class UserApi {
	static readonly client = generateClient()
	static readonly graphqlService = new GraphQLService()
	static readonly storageService = new StorageService()

	public static onUpdate(
		user: API.User,
		onDataReceived: (data: API.User) => void,
		onError: (error: unknown) => void,
	) {
		const subscription = this.client
			.graphql({
				query: Subscription.onUpdateUser,
				variables: {
					filter: {
						id: { eq: user.id },
					},
				},
			})
			.subscribe({
				next: ({ data }) =>
					onDataReceived(data.onUpdateUser as API.User),
				error: (error) => onError(error),
			})

		// const subscription = this.graphqlService.subscribe(
		// 	Subscription.onUpdateUser,
		// 	{
		// 		query: Subscription.onUpdateUser,
		// 		variables: {
		// 			filter: {
		// 				id: { eq: user.id },
		// 			},
		// 		},
		// 	},
		// )

		return subscription
	}

	public static async read(id: string): Promise<API.User | null> {
		const response = (await this.graphqlService.query(Query.getUser, {
			id,
		})) as GraphQLResult<API.GetUserQuery>
		if (response) {
			response.data
		}
		const user = response.data

		if (user.getUser) {
			user.getUser.selfie = await this.storageService.getUrlFromkey(
				user.getUser.selfie!,
			)
		}

		return user as API.User
	}

	public static async list(
		filters?: API.ModelUserFilterInput,
		limit?: number,
		previousToken?: string,
	): Promise<{
		items: API.User[]
		nextToken?: string | null
	}> {
		const response = await this.client.graphql({
			query: Query.listUsers,
			variables: {
				filter: filters,
				limit: limit ?? 10,
				nextToken: previousToken,
			},
			authMode: "apiKey",
		})

		const pagedList = response.data.listUsers
		const usersPromises = (pagedList.items as API.User[]).map(
			async (user) => {
				if (user?.selfie) {
					user.selfie = await this.storageService.getUrlFromkey(
						user.selfie,
					)
				}

				return user
			},
		)

		const users = await Promise.all(usersPromises)

		return {
			items: users,
			nextToken: pagedList.nextToken,
		}
	}

	public static async update(
		user: API.UpdateUserInput,
		selfie?: File,
	): Promise<API.User> {
		if (selfie) {
			user.selfie = await this.storageService.upload(
				`users/${user.id}/selfie.png`,
				selfie,
			)
		}

		const response = await this.client.graphql({
			query: Mutation.updateUser,
			variables: {
				input: {
					...user,
				},
			},
		})

		const updatedUser = response.data.updateUser as API.User

		if (updatedUser?.selfie) {
			updatedUser.selfie = await this.storageService.getUrlFromkey(
				updatedUser.selfie,
			)
		}

		return updatedUser
	}
}
