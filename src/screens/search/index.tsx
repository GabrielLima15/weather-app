import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDebounce } from '../../hooks/useDebounce';
import { weatherService } from '../../services/weather';
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '../../contexts/language-context';
import { translate } from '../../utils/translations';
import { 
  Container, 
  SearchInput, 
  SearchInputContainer,
  SearchIcon,
  ResultsList,
  CityItem,
  CityName,
  CountryName,
  EmptyState,
  EmptyStateText,
  LoadingContainer
} from './styled';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { RootDrawerParamList } from '../../navigation';

type NavigationProp = DrawerNavigationProp<RootDrawerParamList>;

export function SearchScreen() {
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

  return (
    <Container>
      <SearchInputContainer>
        <SearchIcon name="search" size={20} color="white" />
        <SearchInput
          placeholder={translate('searchPlaceholder', language)}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholderTextColor="gray"
        />
      </SearchInputContainer>

      {isLoading && debouncedSearch.length > 2 ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="white" />
        </LoadingContainer>
      ) : cities?.length ? (
        <ResultsList
          data={cities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CityItem onPress={() => handleCitySelect(`${item.name},${item.region}`)}>
              <CityName>{item.name}</CityName>
              <CountryName>{`${item.region}, ${item.country}`}</CountryName>
            </CityItem>
          )}
        />
      ) : debouncedSearch.length > 2 ? (
        <EmptyState>
          <Feather name="map-pin" size={48} color="gray" />
          <EmptyStateText>{translate('noCitiesFound', language)}</EmptyStateText>
        </EmptyState>
      ) : null}
    </Container>
  );
} 