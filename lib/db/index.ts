export async function getStores() {
    const apiKey = typeof process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY !== 'undefined' ? process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY : ''
    const headers: HeadersInit = {'Authorization': apiKey}
    const response = await fetch("https://api.foursquare.com/v3/places/search?query=coffee&ll=52.3676,4.9041&limit=6", {headers})

    return await response.json();
}
