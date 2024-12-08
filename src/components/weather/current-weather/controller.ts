import { translateCity } from '../../../utils/cityTranslations';
import { translate } from '../../../utils/translations';
import { getCityKey } from '../../../utils/cityMapping';
import type { WeatherResponse } from '../../../services/types/weather';

export function useCurrentWeatherController(data: WeatherResponse, language: string) {
  const cityKey = getCityKey(data.location.name);
  const cityName = translateCity(cityKey, language);

  const translations = {
    humidity: translate('humidity', language),
    wind: translate('wind', language),
    feelsLike: translate('feelsLike', language),
  };

  const weatherData = {
    temperature: Math.round(data.current.temp_c),
    humidity: data.current.humidity,
    windSpeed: data.current.wind_kph,
    feelsLike: Math.round(data.current.feelslike_c),
    condition: {
      icon: `https:${data.current.condition.icon}`,
      text: data.current.condition.text,
    },
  };

  return {
    cityName,
    translations,
    weatherData,
  };
} 