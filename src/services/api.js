import axios from 'axios';

const api = axios.create({
    baseURL: 'https://realtime-boxfiles.herokuapp.com'
});

export default api;