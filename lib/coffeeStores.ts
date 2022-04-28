import {getStores} from "@lib/db";

export const getCoffeeStores = async () => {
    return await getStores()
}
