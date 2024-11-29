import { useState } from 'react';
import { useLanguage } from '../../contexts/language-context';
import { useDebounce } from '../../hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { weatherService } from '../../services/weather';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { IndexPath } from '@ui-kitten/components';

interface SearchLocation {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
}

export function useDrawerController(props: DrawerContentComponentProps) {
  const { navigation, state } = props;
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { data: cities, isLoading } = useQuery<SearchLocation[]>({
    queryKey: ['cities', debouncedSearch],
    queryFn: () => weatherService.searchLocations(debouncedSearch),
    enabled: debouncedSearch.length > 2,
  });

  const handleSelect = (index: IndexPath | IndexPath[]) => {
    if (index instanceof IndexPath) {
      navigation.navigate(state.routeNames[index.row]);
    }
  };

  const handleCitySelect = (city: string) => {
    setSearchTerm('');
    navigation.navigate('Home', { city });
  };

  return {
    language,
    searchTerm,
    setSearchTerm,
    cities,
    isLoading,
    handleSelect,
    handleCitySelect,
    state,
  };
} 