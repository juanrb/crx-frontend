import * as Types from '../api-client'
import { throwException } from '../api-client'

import { getBaseUrl, getFetch, getJsonParseReviver } from './helpers'

/**
 * @return The result records
 */
export function resultByBotId(botId: string): Promise<Types.Result> {
	let url_ = getBaseUrl() + '/api/user/real-estate/results/{botId}'
	if (botId === undefined || botId === null)
		throw new Error("The parameter 'botId' must be defined.")
	url_ = url_.replace('{botId}', encodeURIComponent('' + botId))
	url_ = url_.replace(/[?&]$/, '')

	const options_: RequestInit = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	}

	return getFetch()
		.fetch(url_, options_)
		.then((_response: Response) => {
			return processResultByBotId(_response)
		})
}

function processResultByBotId(response: Response): Promise<Types.Result> {
	const status = response.status
	const _headers: any = {}
	if (response.headers && response.headers.forEach) {
		response.headers.forEach((v: any, k: any) => (_headers[k] = v))
	}
	if (status === 200) {
		return response.text().then((_responseText) => {
			let result200: any = null
			const resultData200 =
				_responseText === ''
					? null
					: JSON.parse(_responseText, getJsonParseReviver())
			result200 = Types.Result.fromJS(resultData200)
			return result200
		})
	} else if (status !== 200 && status !== 204) {
		return response.text().then((_responseText) => {
			return throwException(
				'An unexpected server error occurred.',
				status,
				_responseText,
				_headers
			)
		})
	}
	return Promise.resolve<Types.Result>(null as any)
}

/**
 * @param statusId New status Id
 * @return The result records
 */
export function update(
	id: number,
	botId: number,
	statusId: string
): Promise<Types.Result> {
	let url_ = getBaseUrl() + '/api/user/real-estate/results/{botId}/{id}'
	if (id === undefined || id === null)
		throw new Error("The parameter 'id' must be defined.")
	url_ = url_.replace('{id}', encodeURIComponent('' + id))
	if (botId === undefined || botId === null)
		throw new Error("The parameter 'botId' must be defined.")
	url_ = url_.replace('{botId}', encodeURIComponent('' + botId))
	if (statusId === undefined || statusId === null)
		throw new Error("The parameter 'statusId' must be defined.")
	url_ = url_.replace('{statusId}', encodeURIComponent('' + statusId))
	url_ = url_.replace(/[?&]$/, '')

	const options_: RequestInit = {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
		},
	}

	return getFetch()
		.fetch(url_, options_)
		.then((_response: Response) => {
			return processUpdate(_response)
		})
}

function processUpdate(response: Response): Promise<Types.Result> {
	const status = response.status
	const _headers: any = {}
	if (response.headers && response.headers.forEach) {
		response.headers.forEach((v: any, k: any) => (_headers[k] = v))
	}
	if (status === 200) {
		return response.text().then((_responseText) => {
			let result200: any = null
			const resultData200 =
				_responseText === ''
					? null
					: JSON.parse(_responseText, getJsonParseReviver())
			result200 = Types.Result.fromJS(resultData200)
			return result200
		})
	} else if (status !== 200 && status !== 204) {
		return response.text().then((_responseText) => {
			return throwException(
				'An unexpected server error occurred.',
				status,
				_responseText,
				_headers
			)
		})
	}
	return Promise.resolve<Types.Result>(null as any)
}
