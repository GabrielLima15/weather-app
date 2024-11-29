import { api } from './api';
import type { WeatherResponse, ForecastResponse } from './types/weather';
import type { SearchLocation } from './types/api';
import { getDefaultStates } from '../utils/defaultCities';

export const SUPPORTED_LANGUAGES = {
  'pt_br': 'Português do Brasil',
  'en': 'English',
  'es': 'Español',
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

export const weatherService = {
  getCurrentWeatherByCoords: async (lat: number, lon: number, lang: SupportedLanguage = 'pt_br') => {
    const response = await api.get<WeatherResponse>('/current.json', {
      params: {
        q: `${lat},${lon}`,
        aqi: 'no',
        lang,
      },
    });
    return response.data;
  },

  getCurrentWeatherByCity: async (city: string, lang: SupportedLanguage = 'pt_br') => {
    const response = await api.get<WeatherResponse>('/current.json', {
      params: {
        q: city,
        lang,
      },
    });
    return response.data;
  },

  getForecastByCity: async (city: string, days: number = 3, lang: SupportedLanguage = 'pt_br') => {
    const response = await api.get<ForecastResponse>('/forecast.json', {
      params: {
        q: city,
        days,
        aqi: 'no',
        lang,
      },
    });
    return response.data;
  },

  searchLocations: async (query: string): Promise<SearchLocation[]> => {
    const response = await api.get('/search.json', {
      params: {
        q: query,
      },
    });
    return response.data;
  },

  // Atualizar este método para usar os estados e retornar a primeira cidade de cada estado
  getBrazilianCities: (lang: SupportedLanguage = 'pt_br') => {
    const states = getDefaultStates(lang);
    return states.map(state => `${state.cities[0]}, ${state.name}`);
  },
}; 