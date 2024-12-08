import React from 'react';
import { ActivityIndicator } from 'react-native';
import { translate } from '../../utils/translations';
import { useSearchController } from './controller';
import { Feather } from '@expo/vector-icons';
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

export function SearchScreen() {
  const {
    searchTerm,
    setSearchTerm,
    cities,
    isLoading,
    language,
    handleCitySelect,
  } = useSearchController();

  const debouncedSearchLength = searchTerm.length > 2;

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

      {isLoading && debouncedSearchLength ? (
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
      ) : debouncedSearchLength ? (
        <EmptyState>
          <Feather name="map-pin" size={48} color="gray" />
          <EmptyStateText>{translate('noCitiesFound', language)}</EmptyStateText>
        </EmptyState>
      ) : null}
    </Container>
  );
} 