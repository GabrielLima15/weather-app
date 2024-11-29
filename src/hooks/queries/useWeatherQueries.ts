import { useQuery, useQueryClient } from '@tanstack/react-query';
import { weatherService, type SupportedLanguage } from '../../services/weather';
import type { WeatherResponse } from '../../services/types/weather';
import { QueryKeys } from './constants';

interface UseWeatherQueriesOptions {
  enabled?: boolean;
  onSuccess?: (data: { current: WeatherResponse, forecast: any }) => void;
  onError?: (error: Error) => void;
  refetchInterval?: number | false;
  language?: SupportedLanguage;
}

export function useWeatherQueries(
  city: string = 'São Paulo,SP',
  options: UseWeatherQueriesOptions = {}
) {
  const { language = 'pt', ...restOptions } = options;
  const queryClient = useQueryClient();
  
  const {
    data: weatherData,
    isLoading,
    error,
    refetch,
    isFetching,
    isRefetching,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: QueryKeys.weather.byCity(city, language),
    queryFn: async () => {
      const [currentData, forecastData] = await Promise.all([
        weatherService.getCurrentWeatherByCity(city, language),
        weatherService.getForecastByCity(city, 5, language)
      ]);

      return {
        current: currentData,
        forecast: forecastData
      };
    },
    staleTime: 1000 * 60 * 5, // 5 minutos
    ...restOptions,
  });

  // Pré-fetch dados de uma cidade
  const prefetchCityData = async (cityName: string, lang: SupportedLanguage = language) => {
    await queryClient.prefetchQuery({
      queryKey: QueryKeys.weather.byCity(cityName, lang),
      queryFn: async () => {
        const [currentData, forecastData] = await Promise.all([
          weatherService.getCurrentWeatherByCity(cityName, lang),
          weatherService.getForecastByCity(cityName, 5, lang)
        ]);
        return {
          current: currentData,
          forecast: forecastData
        };
      },
    });
  };

  return {
    currentWeather: weatherData?.current || null,
    forecast: weatherData?.forecast || null,
    isLoading,
    isFetching,
    isRefetching,
    isSuccess,
    isError,
    error: error ? 'Falha ao carregar dados do clima' : null,
    refreshWeather: refetch,
    prefetchCityData,
    availableCities: weatherService.getBrazilianCities(),
  };
} 