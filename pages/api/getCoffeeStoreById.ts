import {findRecordByFilter} from "@lib/airtable";
import {NextApiRequest, NextApiResponse} from "next";
import {CoffeeStoreResponse} from "@pages/api/types";

const getCoffeeStoreById = async (req:NextApiRequest, res: NextApiResponse<CoffeeStoreResponse>) => {
    const {id} = req.query
    try {
        if (id) {
            const records = await findRecordByFilter(String(id))
            if (records.length > 0) {
                res.json(records)
            } else {
                res.json({message: `id could not be found`})
            }
        } else {
            res.status(400)
            res.json({message: "Id is missing"})
        }
    } catch (error) {
        res.status(500)
        res.json({message: "Something went wrong", error})
    }
}

export default getCoffeeStoreById
