import { useWeatherQueries } from '../../hooks/queries/useWeatherQueries';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useLocation } from '../../hooks/useLocation';

export function useHomeController() {
  const route = useRoute<any>();
  const [currentCity, setCurrentCity] = useState<string | null>(null);
  const { 
    location, 
    error: locationError, 
    isLoading: isLoadingLocation,
    showPermissionModal,
    handlePermissionResponse,
    requestLocation 
  } = useLocation();
  
  useEffect(() => {
    if (route.params?.city) {
      setCurrentCity(route.params.city);
    } else if (location) {
      setCurrentCity(location);
    }
  }, [route.params?.city, location]);

  const { 
    currentWeather, 
    forecast, 
    isLoading: isLoadingWeather, 
    error: weatherError,
    refreshWeather 
  } = useWeatherQueries(currentCity || 'São Paulo,SP');

  return {
    currentWeather,
    forecast,
    isLoading: isLoadingLocation || isLoadingWeather,
    error: locationError || weatherError,
    refreshWeather,
    requestLocation,
    showPermissionModal,
    handlePermissionResponse
  };
} 