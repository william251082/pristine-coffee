import {NextApiRequest, NextApiResponse} from "next";
import {CreateCoffeeStoreResponse} from "@pages/api/types";
import {findRecordByFilter, getMinifiedRecords, table} from "@lib/airtable";

const createCoffeeStore = async (req:NextApiRequest, res: NextApiResponse<CreateCoffeeStoreResponse>) => {
    if (req.method === "POST") {
        const {id, name, neighbourhood, address, imgUrl, voting} = req.body
        try {
            if (id) {
                const records = await findRecordByFilter(id)
                if (records.length > 0) {
                    res.json(records)
                } else {
                    if (name) {
                        const createRecords = await table.create([
                            {
                                fields: {
                                    id,
                                    name,
                                    address,
                                    neighbourhood,
                                    voting,
                                    imgUrl
                                },
                            },
                        ])
                        const records = getMinifiedRecords(createRecords)
                        res.json(createRecords)
                    } else {
                        res.status(400)
                        res.json({message: "Id or name is missing"})
                    }
                }
            }
        } catch (err) {
            console.error("Error creating or finding a store", err)
            res.status(500)
            res.json({message: "Error creating or finding a store", err})
        }
    }
}

export default createCoffeeStore;
