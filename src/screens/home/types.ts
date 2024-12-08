import type { WeatherResponse, ForecastResponse, HistoryResponse } from '../../services/types/weather';

export interface HomeScreenProps {}

export interface HomeScreenState {
  currentWeather: WeatherResponse | null;
  forecast: ForecastResponse | null;
  history: HistoryResponse | null;
  isLoading: boolean;
  error: string | null;
  refreshWeather: () => Promise<void>;
  requestLocation: () => void;
  showPermissionModal: boolean;
  handlePermissionResponse: (allowed: boolean) => Promise<void>;
} 