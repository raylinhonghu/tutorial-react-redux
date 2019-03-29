import { useState, useEffect } from 'react';
import jsonapi from './api';

const userResource = (resource) => {
    const [resources, setResource] = useState([]);

    useEffect(() => {
        (
            async () => {
                const response = await jsonapi.get(`/${resource}`)
                setResource(response.data)
            }
        )(resource)
    }, [resource])

    return resources;
}

export default userResource;