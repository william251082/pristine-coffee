import {NextApiRequest, NextApiResponse} from "next";
import {CoffeeStoresByLocationResponse} from "@pages/api/types";
import {getCoffeeStores} from "@lib/coffeeStores";

const getCoffeeStoresByLocation = async (req:NextApiRequest, res: NextApiResponse<CoffeeStoresByLocationResponse>) => {
    try {
        const {latLong, limit} = req.query
        const response = await getCoffeeStores(latLong, limit)
        res.status(200)
        res.json(response)
    } catch (err) {
        console.error("There is an error", err)
        res.status(500)
        res.json({message: "Oh no! Something went wrong", err})
    }
};

export default getCoffeeStoresByLocation;
