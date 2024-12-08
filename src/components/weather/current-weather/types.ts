import type { WeatherResponse } from '../../../services/types/weather';

export interface CurrentWeatherProps {
  data: WeatherResponse;
  language?: string;
} 