import {cardCount, fetchCoffeeStores, fetchStores} from "@lib/db";

export const defaultLatLong = '52.3676,4.9041'

export const getCoffeeStores = async (
    latLong: string | string[] = defaultLatLong, limit: string | string[] = cardCount.toString()
) => {
    return await fetchStores(String(latLong), String(limit), 'coffee-shops') || []
}

export const getCoffeeStoresPhotos = async () => {
    return await fetchCoffeeStores() || []
}
