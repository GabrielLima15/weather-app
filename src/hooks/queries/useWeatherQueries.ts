import { useQuery } from '@tanstack/react-query';
import { weatherApi } from '../../services/weather';
import { QUERY_KEYS } from './constants';
import { useLocation } from '../useLocation';

interface UseWeatherQueriesOptions {
  city?: string;
}

export function useWeatherQueries(options: UseWeatherQueriesOptions = {}) {
  const { location } = useLocation();
  const queryLocation = options.city || location || 'São Paulo,SP';
  
  const {
    data: currentWeather,
    isLoading: isLoadingCurrent,
    error: currentError,
    refetch: refetchCurrent,
  } = useQuery({
    queryKey: [QUERY_KEYS.CURRENT_WEATHER, queryLocation],
    queryFn: () => weatherApi.getCurrentWeather(queryLocation),
    enabled: !!queryLocation,
  });

  const {
    data: forecast,
    isLoading: isLoadingForecast,
    error: forecastError,
    refetch: refetchForecast,
  } = useQuery({
    queryKey: [QUERY_KEYS.FORECAST, queryLocation],
    queryFn: () => weatherApi.getForecast(queryLocation),
    enabled: !!queryLocation,
  });

  const {
    data: history,
    isLoading: isLoadingHistory,
    error: historyError,
    refetch: refetchHistory,
  } = useQuery({
    queryKey: [QUERY_KEYS.HISTORY, queryLocation],
    queryFn: () => weatherApi.getHistory(queryLocation),
    enabled: !!queryLocation,
  });

  const refreshWeather = async () => {
    await Promise.all([
      refetchCurrent(),
      refetchForecast(),
      refetchHistory(),
    ]);
  };

  return {
    currentWeather,
    forecast,
    history,
    isLoading: isLoadingCurrent || isLoadingForecast || isLoadingHistory,
    error: currentError || forecastError || historyError,
    refreshWeather,
  };
} 