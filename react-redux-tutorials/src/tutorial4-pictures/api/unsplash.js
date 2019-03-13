import Unsplash from 'unsplash-js';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 44ae3afb87dabc26a2eb1b30cca707558fd632b5a3cc28e1d4706e85f9d3799d'
    }
})