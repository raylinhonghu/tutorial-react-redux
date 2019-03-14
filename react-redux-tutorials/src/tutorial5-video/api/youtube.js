import axios from 'axios';

export default axios.create({
    baseURL: '',
    headers: {
        params:{
            KEY: 'key'
        }
    }
})