import {findRecordByFilter, getMinifiedRecords, table} from "@lib/airtable";
import {NextApiRequest, NextApiResponse} from "next";
import {AirTableRecordFields, FavouriteCoffeeStoreResponse} from "@pages/api/types";

const favouriteCoffeeStoreById = async (req:NextApiRequest, res: NextApiResponse<FavouriteCoffeeStoreResponse | any[]>) => {
    if (req.method === "PUT") {
        try {
            const {id} = req.body;
            if (id) {
                const records = await findRecordByFilter(String(id));
                if (records.length !== 0) {
                  const record: AirTableRecordFields = records[0];
                  const {recordId, imgUrl, voting, id, name, address, neighbourhood} = record
                  const calculateVoting = parseInt(String(voting)) + 1;
                  const updateRecord = await table.update([{
                      id: recordId,
                      fields: {
                          voting: calculateVoting,
                          imgUrl,
                          id,
                          name,
                          address,
                          neighbourhood
                        },
                      },
                  ]);
                    if (updateRecord) {
                      const minifiedRecords = getMinifiedRecords(updateRecord);
                      res.json(minifiedRecords);
                  }
                } else {
                    res.json({message: "Coffee store id doesn't exist", id});
                }
            } else {
                res.status(400);
                res.json({message: "Id is missing"});
            }
        } catch (error) {
            res.status(500);
            res.json({message: "Error voting on coffee store", error});
        }
    }
};

export default favouriteCoffeeStoreById;
