import {cardCount, fetchCoffeeStores, fetchStores} from "@lib/db";

export const getCoffeeStores = async () => {
    return await fetchStores('52.3676,4.9041', cardCount.toString(), 'coffee-shops') || []
}

export const getCoffeeStoresPhotos = async () => {
    return await fetchCoffeeStores() || []
}
