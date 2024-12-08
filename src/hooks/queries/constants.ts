import type { SupportedLanguage } from '../../services/weather';

export const QUERY_KEYS = {
  CURRENT_WEATHER: 'currentWeather',
  FORECAST: 'forecast',
  HISTORY: 'history',
} as const;

export const QueryKeys = {
  weather: {
    byCity: (city: string, language: string) => ['weather', city, language],
    history: (city: string, language: string) => ['weather', 'history', city, language],
  },
}; 