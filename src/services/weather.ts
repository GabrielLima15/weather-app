import { api } from './api';
import type { WeatherResponse, ForecastResponse, HistoryResponse } from './types/weather';
import type { SearchLocation } from './types/api';
import { getDefaultStates } from '../utils/defaultCities';

export const SUPPORTED_LANGUAGES = {
  'pt_br': 'Português do Brasil',
  'en': 'English',
  'es': 'Español',
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

export const weatherApi = {
  getCurrentWeather: async (location: string): Promise<WeatherResponse> => {
    const response = await api.get(`/current.json?q=${location}`);
    return response.data;
  },

  getForecast: async (location: string): Promise<ForecastResponse> => {
    const response = await api.get(`/forecast.json?q=${location}&days=7`);
    return response.data;
  },

  getHistory: async (location: string): Promise<HistoryResponse> => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);

    const response = await api.get(
      `/history.json?q=${location}&dt=${startDate.toISOString().split('T')[0]}&end_dt=${endDate.toISOString().split('T')[0]}`
    );
    return response.data;
  },
};

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

  getHistoricalWeather: async (city: string, days: number = 7, lang: SupportedLanguage = 'pt_br') => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const response = await api.get<HistoryResponse>('/history.json', {
      params: {
        q: city,
        dt: startDate.toISOString().split('T')[0],
        end_dt: endDate.toISOString().split('T')[0],
        lang,
      },
    });
    return response.data;
  },
}; 