import { createApi } from "unsplash-js";
import {getCoffeeStoresPhotos} from "@lib/coffeeStores";
import {CoffeeStore} from "@data/coffeeStores";

export const cardCount = 12

const accessKey = typeof process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY !== 'undefined' ? process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY : ''
const unsplashApi = createApi({accessKey})
export const fetchCoffeeStores = async () => {
    const photos = await unsplashApi.search.getPhotos({
        query: 'coffee',
        perPage: cardCount
    })
    const unsplashResults = photos.response?.results
    return unsplashResults?.map((result) => {
        return result.urls['small']
    })
}

export async function fetchStores(latLong: string, limit: string, query: string) {
    const apiKey = typeof process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY !== 'undefined' ? process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY : ''
    const headers: HeadersInit = {'Authorization': apiKey}
    const response = await fetch(`https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`, {headers})
    const data = await response.json()
    const stores = data.results || []
    const photos: string[] = await getCoffeeStoresPhotos()
    return stores.map((venue: CoffeeStore, idx: number) => {
        return {
            id: venue.fsq_id,
            address: venue.location.address || '',
            name: venue.name,
            neighbourhood: venue.location.neighborhood || '',
            imgUrl: photos[idx]
        }
    })
}
