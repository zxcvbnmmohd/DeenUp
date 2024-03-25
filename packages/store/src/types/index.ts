export type Result<T> =
	| { onSuccess: T; onFailure?: never }
	| { onSuccess?: never; onFailure: string }
