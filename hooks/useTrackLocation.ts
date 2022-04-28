import {useState} from "react";

interface Position {
    coords: Coords
}
interface Coords {
    latitude: number
    longitude: number
}

const useTrackLocation = () => {
    const [locationErrorMsg, setLocationErrorMsg] = useState('')
    const [latLong, setLatLong] = useState('')
    const [isFindingLocation, setIsFindingLocation] = useState(false)
    const success = (position: Position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        setLatLong(`${latitude}, ${longitude}`)
        setIsFindingLocation(false)
    }
    const error = () => {
        setIsFindingLocation(false)
        setLocationErrorMsg("Unable to retrieve your location")
    }
    const handleTrackLocation = () => {
        setIsFindingLocation(true)
        if (!navigator.geolocation) {
            setLocationErrorMsg("Geolocation is not supported by your browser")
            setIsFindingLocation(false)
        } else {
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }
    return {latLong, locationErrorMsg, handleTrackLocation, isFindingLocation}
}

export default useTrackLocation
