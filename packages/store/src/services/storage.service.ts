import { getUrl, uploadData } from "aws-amplify/storage"

export default class StorageService {
	getUrlFromkey = async (key: string): Promise<string> => {
		const result = await getUrl({
			key,
		})

		return result.url.toString()
	}

	upload = async (key: string, file: File): Promise<string> => {
		const result = await uploadData({
			key,
			data: file,
		}).result

		return result.key
	}
}
