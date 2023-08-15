import * as Types from '../api-client'
import { throwException } from '../api-client'

import { getBaseUrl, getFetch, getJsonParseReviver } from './helpers'

/**
 * @return The bot records
 */
export function bot(): Promise<Types.Bot[]> {
	let url_ = getBaseUrl() + '/api/user/real-estate/bot'
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
			return processBot(_response)
		})
}

function processBot(response: Response): Promise<Types.Bot[]> {
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
			if (Array.isArray(resultData200)) {
				result200 = [] as any
				for (const item of resultData200) result200.push(Types.Bot.fromJS(item))
			} else {
				result200 = <any>null
			}
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
	return Promise.resolve<Types.Bot[]>(null as any)
}

/**
 * @param label label of the bot
 * @param type type of flat
 * @param rooms Quantity of rooms
 * @param priceMax Maximum price
 * @param priceMin Minimum price
 * @return The bot records
 */
export function create(
	label: string,
	type: string,
	rooms: string,
	priceMax: number,
	priceMin: number
): Promise<Types.Bot> {
	let url_ = getBaseUrl() + '/api/user/real-estate/bot'
	if (label === undefined || label === null)
		throw new Error("The parameter 'label' must be defined.")
	url_ = url_.replace('{label}', encodeURIComponent('' + label))
	if (type === undefined || type === null)
		throw new Error("The parameter 'type' must be defined.")
	url_ = url_.replace('{type}', encodeURIComponent('' + type))
	if (rooms === undefined || rooms === null)
		throw new Error("The parameter 'rooms' must be defined.")
	url_ = url_.replace('{rooms}', encodeURIComponent('' + rooms))
	if (priceMax === undefined || priceMax === null)
		throw new Error("The parameter 'priceMax' must be defined.")
	url_ = url_.replace('{priceMax}', encodeURIComponent('' + priceMax))
	if (priceMin === undefined || priceMin === null)
		throw new Error("The parameter 'priceMin' must be defined.")
	url_ = url_.replace('{priceMin}', encodeURIComponent('' + priceMin))
	url_ = url_.replace(/[?&]$/, '')

	const options_: RequestInit = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
		},
	}

	return getFetch()
		.fetch(url_, options_)
		.then((_response: Response) => {
			return processCreate(_response)
		})
}

function processCreate(response: Response): Promise<Types.Bot> {
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
			result200 = Types.Bot.fromJS(resultData200)
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
	return Promise.resolve<Types.Bot>(null as any)
}

/**
 * @return The bot records
 */
export function botById(id: string): Promise<Types.Bot> {
	let url_ = getBaseUrl() + '/api/user/real-estate/bot/{id}'
	if (id === undefined || id === null)
		throw new Error("The parameter 'id' must be defined.")
	url_ = url_.replace('{id}', encodeURIComponent('' + id))
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
			return processBotById(_response)
		})
}

function processBotById(response: Response): Promise<Types.Bot> {
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
			result200 = Types.Bot.fromJS(resultData200)
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
	return Promise.resolve<Types.Bot>(null as any)
}

/**
 * @return The bot records
 */
export function delete_(id: string): Promise<Types.Bot> {
	let url_ = getBaseUrl() + '/api/user/real-estate/bot/{id}'
	if (id === undefined || id === null)
		throw new Error("The parameter 'id' must be defined.")
	url_ = url_.replace('{id}', encodeURIComponent('' + id))
	url_ = url_.replace(/[?&]$/, '')

	const options_: RequestInit = {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
		},
	}

	return getFetch()
		.fetch(url_, options_)
		.then((_response: Response) => {
			return processDelete(_response)
		})
}

function processDelete(response: Response): Promise<Types.Bot> {
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
			result200 = Types.Bot.fromJS(resultData200)
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
	return Promise.resolve<Types.Bot>(null as any)
}
