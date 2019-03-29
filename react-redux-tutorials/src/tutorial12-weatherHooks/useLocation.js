import {useState, useEffect} from 'react';

const userLocation = () => {

    const [location, setLocation] = useState(null);
    const [error, setError] = useState('');

    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            position => setLocation(position.coords.latitude),
            err => setError(err.message)
        )
    }, [])

    return [location, error];
}

export default userLocation;