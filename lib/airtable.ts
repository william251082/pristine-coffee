const Airtable = require('airtable')
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
})
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY)
const table = base("coffee_store")

const getMinifiedRecord = (record: Record<any, any>) => {
    return {
        recordId: record.id,
        ...record.fields
    }
}

const getMinifiedRecords = (records: Record<any, any>[]) => {
    return records.map((record: Record<any, any>) => getMinifiedRecord(record))
}
const findRecordByFilter = async (id: string) => {
    const findCoffeeStoreRecords = await table
        .select({
            filterByFormula: `id="${id}"`
        })
        .firstPage()
    return getMinifiedRecords(findCoffeeStoreRecords) || []
}

export { table, getMinifiedRecords, findRecordByFilter }
