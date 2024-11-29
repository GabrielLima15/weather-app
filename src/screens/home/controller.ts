import { useWeatherQueries } from '../../hooks/queries/useWeatherQueries';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useLocation } from '../../hooks/useLocation';
import { useNotifications } from '../../contexts/notifications-context';
import { useLanguage } from '../../contexts/language-context';

export function useHomeController() {
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
    isLoading: isLoadingWeather, 
    error: weatherError,
    refreshWeather 
  } = useWeatherQueries(currentCity || 'São Paulo,SP', { language });

  // Verificar condições para alertas
  useEffect(() => {
    if (currentWeather) {
      // Alerta de chuva
      if (currentWeather.current.condition.text.toLowerCase().includes('rain')) {
        scheduleWeatherAlert('rainAlert', 'Há previsão de chuva para hoje!');
      }

      // Alerta de temperatura
      if (currentWeather.current.temp_c > 30) {
        scheduleWeatherAlert('temperatureAlert', 'Temperatura muito alta! Mantenha-se hidratado.');
      }

      // Alerta de vento
      if (currentWeather.current.wind_kph > 40) {
        scheduleWeatherAlert('windAlert', 'Ventos fortes! Tome cuidado ao sair.');
      }
    }
  }, [currentWeather]);

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