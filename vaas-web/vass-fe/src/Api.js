import axios from 'axios';


export const client = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
