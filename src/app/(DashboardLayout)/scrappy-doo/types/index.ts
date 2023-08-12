export interface BotDTO {
	id: string
	name: string
	city: string
	type: string
	minPrice: number
	maxPrice: number
	rooms: number
}

// FIXME: improve this naming
export interface ResultDTO {
	id: number
	url: string
	title: string
	price: number
	priceHistory: string
	status: string
	addressLine: string
	neighborhoodName: string
	totalArea: number
	coveredArea: number
	uncoveredArea: number
	createdAt: Date
	updatedAt: Date
	category: string
}
