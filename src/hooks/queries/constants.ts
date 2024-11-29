import type { SupportedLanguage } from '../../services/weather';

export const QueryKeys = {
  weather: {
    all: ['weather'] as const,
    byCity: (city: string, lang: SupportedLanguage) => 
      [...QueryKeys.weather.all, 'city', city, lang] as const,
  },
} as const; 