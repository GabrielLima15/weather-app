import { useState } from 'react';
import { useWeatherQueries } from '../../hooks/queries/useWeatherQueries';
import { useLanguage } from '../../contexts/language-context';
import { useRoute } from '@react-navigation/native';

export function useHistoryController() {
  const route = useRoute<any>();
  const { language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState(route.params?.city || 'São Paulo,SP');

  const { 
    history,
    isLoading,
    error,
  } = useWeatherQueries(selectedCity, { language });

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  return {
    history,
    isLoading,
    error,
    language,
    selectedCity,
    handleCityChange,
  };
} 