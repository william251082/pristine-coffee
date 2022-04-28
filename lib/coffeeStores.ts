import {cardCount, fetchCoffeeStores, fetchStores} from "@lib/db";

export const getCoffeeStores = async (latLong: string) => {
    return await fetchStores(latLong, cardCount.toString(), 'coffee-shops') || []
}

export const getCoffeeStoresPhotos = async () => {
    return await fetchCoffeeStores() || []
}
