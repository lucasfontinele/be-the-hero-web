import axios from 'axios';
import { getId } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3333/v1',
});

api.interceptors.request.use((config) => {
  const id = getId();

  if (id) {
    config.headers.authorization = id;
  }

  return config;
});

export default api;
