import {fetchStores} from "@lib/db";

export const getCoffeeStores = async () => {
    return await fetchStores('52.3676,4.9041', '6', 'coffee')
}
