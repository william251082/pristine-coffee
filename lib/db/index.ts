export async function fetchStores(latLong: string, limit: string, query: string) {
    const apiKey = typeof process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY !== 'undefined' ? process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY : ''
    const headers: HeadersInit = {'Authorization': apiKey}
    const response = await fetch(`https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`, {headers})

    return await response.json();
}
