export interface CoffeeStore {
    id: number | string
    fsq_id: string
    name: string
    imgUrl: string
    websiteUrl: string
    address: string
    neighbourhood: string
    neighborhood: string
    timezone: string
    chains: string[]
    distance: number
    geocodes: { main: {}, roof: {} },
    link: string
    location: {
        address: string
        country: string
        formatted_address: string
        locality: string
        neighborhood: string[]
        postcode: string
        region: string
    }
}
