import { api } from './api';
import type { WeatherResponse, ForecastResponse } from './types/weather';
import type { SearchLocation } from './types/api';

export const SUPPORTED_LANGUAGES = {
  'pt': 'Português',
  'pt_br': 'Português do Brasil',
  'en': 'English',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'it': 'Italiano',
  'ja': '日本語',
  'zh': '中文',
  'ko': '한국어',
  'ru': 'Русский',
  'ar': 'العربية',
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

export const weatherService = {
  getCurrentWeatherByCoords: async (lat: number, lon: number, lang: SupportedLanguage = 'pt') => {
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

  // Lista de cidades principais do Brasil
  getBrazilianCities: () => [
    'São Paulo,SP',
    'Rio de Janeiro,RJ',
    'Brasília,DF',
    'Salvador,BA',
    'Fortaleza,CE',
    'Belo Horizonte,MG',
    'Manaus,AM',
    'Curitiba,PR',
    'Recife,PE',
    'Porto Alegre,RS'
  ],
}; 