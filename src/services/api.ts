import axios from 'axios';
import { WEATHER_API_KEY, WEATHER_API_BASE_URL } from '@env';

export const api = axios.create({
  baseURL: WEATHER_API_BASE_URL,
  params: {
    key: WEATHER_API_KEY,
  },
}); 