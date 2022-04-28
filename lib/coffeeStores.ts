import {cardCount, fetchCoffeeStores, fetchStores} from "@lib/db";

export const defaultLatLong = '52.3676,4.9041'

export const getCoffeeStores = async (latLong = defaultLatLong) => {
    return await fetchStores(latLong, cardCount.toString(), 'coffee-shops') || []
}

export const getCoffeeStoresPhotos = async () => {
    return await fetchCoffeeStores() || []
}
