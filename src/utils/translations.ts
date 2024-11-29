export const translations = {
  pt_br: {
    humidity: 'Umidade',
    wind: 'Vento',
    feelsLike: 'Sensação',
    forecast: 'Previsão para 5 dias',
    settings: 'Configurações',
    language: 'Idioma',
    city: 'Cidade',
    weather: 'Clima',
    days: {
      mon: 'seg',
      tue: 'ter',
      wed: 'qua',
      thu: 'qui',
      fri: 'sex',
      sat: 'sáb',
      sun: 'dom'
    },
    searchPlaceholder: 'Buscar cidade...',
    noCitiesFound: 'Nenhuma cidade encontrada',
    search: 'Buscar',
    locationPermissionTitle: 'Usar sua localização',
    locationPermissionDescription: 'Precisamos da sua localização para mostrar a previsão do tempo da sua cidade.',
    allow: 'Permitir',
    deny: 'Agora não',
    locationDenied: 'Localização não permitida',
    favorites: 'Cidades Favoritas',
    addToFavorites: 'Adicionar aos Favoritos',
    removeFromFavorites: 'Remover dos Favoritos',
    noFavorites: 'Nenhuma cidade favorita',
    removeFavorite: 'Remover dos favoritos',
  },
  en: {
    humidity: 'Humidity',
    wind: 'Wind',
    feelsLike: 'Feels like',
    forecast: '5-Day Forecast',
    settings: 'Settings',
    language: 'Language',
    city: 'City',
    weather: 'Weather',
    days: {
      mon: 'Mon',
      tue: 'Tue',
      wed: 'Wed',
      thu: 'Thu',
      fri: 'Fri',
      sat: 'Sat',
      sun: 'Sun'
    },
    searchPlaceholder: 'Search city...',
    noCitiesFound: 'No cities found',
    search: 'Search',
    locationPermissionTitle: 'Use your location',
    locationPermissionDescription: 'We need your location to show the weather forecast for your city.',
    allow: 'Allow',
    deny: 'Not now',
    locationDenied: 'Location not allowed',
    favorites: 'Favorite Cities',
    addToFavorites: 'Add to Favorites',
    removeFromFavorites: 'Remove from Favorites',
    noFavorites: 'No favorite cities',
    removeFavorite: 'Remove from favorites',
  },
  es: {
    humidity: 'Humedad',
    wind: 'Viento',
    feelsLike: 'Sensación',
    forecast: 'Pronóstico de 5 días',
    settings: 'Configuración',
    language: 'Idioma',
    city: 'Ciudad',
    weather: 'Clima',
    days: {
      mon: 'lun',
      tue: 'mar',
      wed: 'mié',
      thu: 'jue',
      fri: 'vie',
      sat: 'sáb',
      sun: 'dom'
    },
    searchPlaceholder: 'Buscar ciudad...',
    noCitiesFound: 'No se encontraron ciudades',
    search: 'Buscar',
    locationPermissionTitle: 'Usar tu ubicación',
    locationPermissionDescription: 'Necesitamos tu ubicación para mostrar el pronóstico del tiempo de tu ciudad.',
    allow: 'Permitir',
    deny: 'Ahora no',
    locationDenied: 'Ubicación no permitida',
    favorites: 'Ciudades Favoritas',
    addToFavorites: 'Añadir a Favoritos',
    removeFromFavorites: 'Quitar de Favoritos',
    noFavorites: 'No hay ciudades favoritas',
    removeFavorite: 'Quitar de favoritos',
  }
};

export type TranslationKey = keyof typeof translations.pt_br;

export function translate(key: TranslationKey, language: string = 'pt_br'): string {
  const translation = translations[language as keyof typeof translations]?.[key];
  
  if (typeof translation === 'string') {
    return translation;
  }
  
  return translations.pt_br[key] as string;
}

export function translateWeekDay(date: Date, language: string = 'pt_br'): string {
  const locale = language === 'pt_br' ? 'pt-BR' : language;
  return date.toLocaleDateString(locale, { weekday: 'short' }).toLowerCase();
} 