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
    const success = (position: Position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        setLatLong(`${latitude}, ${longitude}`)
    }
    const error = () => {
        setLocationErrorMsg("Unable to retrieve your location");
    }
    const handleTrackLocation = () => {
        if (!navigator.geolocation) {
            setLocationErrorMsg("Geolocation is not supported by your browser")
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
    return {latLong, locationErrorMsg, handleTrackLocation}
}

export default useTrackLocation
