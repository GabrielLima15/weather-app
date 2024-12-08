import { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { weatherService } from '../../services/weather';
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '../../contexts/language-context';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { RootDrawerParamList } from '../../navigation';
import type { SearchScreenState } from './types';

type NavigationProp = DrawerNavigationProp<RootDrawerParamList>;

export function useSearchController(): SearchScreenState {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { language } = useLanguage();
  const navigation = useNavigation<NavigationProp>();

  const { data: cities, isLoading } = useQuery({
    queryKey: ['cities', debouncedSearch],
    queryFn: () => weatherService.searchLocations(debouncedSearch),
    enabled: debouncedSearch.length > 2,
  });

  const handleCitySelect = (city: string) => {
    navigation.navigate('Home', { city });
  };

  return {
    searchTerm,
    setSearchTerm,
    cities,
    isLoading,
    language,
    handleCitySelect,
  };
} 