import { useState } from 'react';
import { useWeatherQueries } from '../../hooks/queries/useWeatherQueries';
import { useLanguage } from '../../contexts/language-context';
import { useRoute } from '@react-navigation/native';
import type { HistoryScreenState } from './types';

export function useHistoryController(): HistoryScreenState {
  const route = useRoute<any>();
  const { language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState(route.params?.city || 'São Paulo,SP');

  const { 
    history,
    isLoading,
    error: queryError,
  } = useWeatherQueries({ city: selectedCity });

  const error = queryError 
    ? typeof queryError === 'string' 
      ? queryError 
      : queryError instanceof Error 
        ? queryError.message 
        : 'Erro desconhecido'
    : null;

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  return {
    history: history || null,
    isLoading,
    error,
    language,
    selectedCity,
    handleCityChange,
  };
} 