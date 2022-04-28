import {fetchStoreById, fetchStores} from "@lib/db";
import { createApi } from "unsplash-js";

const accessKey = typeof process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY !== 'undefined' ? process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY : ''
const unsplashApi = createApi({accessKey})

export const getCoffeeStores = async () => {
    return await fetchStores('52.3676,4.9041', '6', 'coffee')
}

export const getCoffeeStoreById = async (id: string) => {
    return await fetchStoreById(id)
}
