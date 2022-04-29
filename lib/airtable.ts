const Airtable = require('airtable')
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
})
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY)
export const table = base("coffee_store")

export {}
