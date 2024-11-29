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
  const { language = 'pt_br', ...restOptions } = options;
  const queryClient = useQueryClient();
  
  const {
    data: weatherData,
    isLoading: isLoadingCurrent,
    error: currentError,
    refetch,
    isFetching,
    isRefetching,
    isSuccess: isCurrentSuccess,
    isError: isCurrentError,
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
    staleTime: 1000 * 60 * 5,
    ...restOptions,
  });

  const {
    data: historyData,
    isLoading: isLoadingHistory,
    error: historyError,
  } = useQuery({
    queryKey: QueryKeys.weather.history(city, language),
    queryFn: () => weatherService.getHistoricalWeather(city, 7, language),
    staleTime: 1000 * 60 * 60,
    ...restOptions,
  });

  return {
    currentWeather: weatherData?.current || null,
    forecast: weatherData?.forecast || null,
    history: historyData?.forecast?.forecastday || null,
    isLoading: isLoadingCurrent || isLoadingHistory,
    isFetching,
    isRefetching,
    isSuccess: isCurrentSuccess,
    isError: isCurrentError,
    error: currentError || historyError ? 'Falha ao carregar dados do clima' : null,
    refreshWeather: refetch,
    availableCities: weatherService.getBrazilianCities(language),
  };
} 