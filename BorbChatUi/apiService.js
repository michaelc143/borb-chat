import axios from 'axios';
import API_PORT from './.env';

const api = axios.create({
  baseURL: 'http://' + API_PORT + ':5000/api',
});

export default api;