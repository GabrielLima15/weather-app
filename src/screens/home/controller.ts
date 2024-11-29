import { useWeatherQueries } from '../../hooks/queries/useWeatherQueries';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

export function useHomeController() {
  const route = useRoute();
  const [currentCity, setCurrentCity] = useState('São Paulo,SP');
  
  useEffect(() => {
    if (route.params?.city) {
      setCurrentCity(route.params.city);
    }
  }, [route.params?.city]);

  return useWeatherQueries(currentCity);
} 