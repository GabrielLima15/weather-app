import { useWeatherQueries } from '../../hooks/queries/useWeatherQueries';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useLocation } from '../../hooks/useLocation';
import { useNotifications } from '../../contexts/notifications-context';
import { useLanguage } from '../../contexts/language-context';
import type { HomeScreenState } from './types';

export function useHomeController(): HomeScreenState {
  const route = useRoute<any>();
  const [currentCity, setCurrentCity] = useState<string | null>(null);
  const { language } = useLanguage();
  const { scheduleWeatherAlert } = useNotifications();
  
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
    history,
    isLoading: isLoadingWeather, 
    error: weatherError,
    refreshWeather 
  } = useWeatherQueries({ 
    city: currentCity || undefined 
  });

  // Verificar condições para alertas
  useEffect(() => {
    if (currentWeather) {
      if (currentWeather.current.condition.text.toLowerCase().includes('rain')) {
        scheduleWeatherAlert('rainAlert', 'Há previsão de chuva para hoje!');
      }
      if (currentWeather.current.temp_c > 30) {
        scheduleWeatherAlert('temperatureAlert', 'Temperatura muito alta! Mantenha-se hidratado.');
      }
      if (currentWeather.current.wind_kph > 40) {
        scheduleWeatherAlert('windAlert', 'Ventos fortes! Tome cuidado ao sair.');
      }
    }
  }, [currentWeather, scheduleWeatherAlert]);

  const error = locationError || weatherError;
  const errorMessage = error 
    ? typeof error === 'string' 
      ? error 
      : error instanceof Error 
        ? error.message 
        : 'Erro desconhecido'
    : null;

  return {
    currentWeather: currentWeather || null,
    forecast: forecast || null,
    history: history || null,
    isLoading: isLoadingLocation || isLoadingWeather,
    error: errorMessage,
    refreshWeather,
    requestLocation,
    showPermissionModal,
    handlePermissionResponse
  };
} 