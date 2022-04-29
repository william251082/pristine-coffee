import {NextApiRequest, NextApiResponse} from "next";
import {CreateCoffeeStoreResponse} from "@pages/api/types";
import {table} from "@lib/airtable";

const createCoffeeStore = async (req:NextApiRequest, res: NextApiResponse<CreateCoffeeStoreResponse>) => {
    if (req.method === "POST") {
        const {id, name, neighbourhood, address, imgUrl, voting} = req.body
        try {
            const findCoffeeStoreRecords = await table.select({
                filterByFormula: 'id="1"'
            }).firstPage()
            if (findCoffeeStoreRecords.length > 0) {
                const records = findCoffeeStoreRecords.map((record: Record<any, any>) => {
                    return {...record.fields}
                })
                res.json(records)
            } else {
                const createRecords = await table.create([
                    {
                        fields: {
                            id,
                            name,
                            address,
                            neighbourhood,
                            voting,
                            imgUrl,
                        },
                    },
                ])
                res.json(createRecords);
            }
        } catch (err) {
            console.error("Error creating or finding a store", err)
            res.status(500)
            res.json({message: "Error creating or finding a store", err})
        }
    }
}

export default createCoffeeStore;
