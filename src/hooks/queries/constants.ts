import type { SupportedLanguage } from '../../services/weather';

export const QueryKeys = {
  weather: {
    all: ['weather'] as const,
    byCity: (city: string, lang: string) => 
      [...QueryKeys.weather.all, 'city', city, lang] as const,
    history: (city: string, lang: string) => 
      [...QueryKeys.weather.all, 'history', city, lang] as const,
  },
} as const; 