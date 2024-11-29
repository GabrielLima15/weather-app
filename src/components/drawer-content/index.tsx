import React, { useState } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, DrawerItem, IndexPath } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useLanguage } from '../../contexts/language-context';
import { translate } from '../../utils/translations';
import styled from 'styled-components/native';
import { useDebounce } from '../../hooks/useDebounce';
import { ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { weatherService } from '../../services/weather';

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { navigation, state } = props;
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { data: cities, isLoading } = useQuery({
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

  return (
    <DrawerContentScrollView {...props}>
      <DrawerHeader>
        <AppName>Weather App</AppName>
      </DrawerHeader>

      <SearchContainer>
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
            <ActivityIndicator size="small" color="white" />
          </LoadingContainer>
        ) : searchTerm.length > 2 && cities?.length ? (
          <ResultsList>
            {cities.map((city) => (
              <CityItem 
                key={`${city.name}-${city.region}`}
                onPress={() => handleCitySelect(`${city.name},${city.region}`)}
              >
                <CityName>{city.name}</CityName>
                <CountryName>{`${city.region}, ${city.country}`}</CountryName>
              </CityItem>
            ))}
          </ResultsList>
        ) : null}
      </SearchContainer>

      <Drawer
        selectedIndex={new IndexPath(state.index)}
        onSelect={handleSelect}
      >
        <DrawerItem
          title={translate('weather', language)}
          accessoryLeft={props => (
            <Feather 
              name="cloud" 
              size={24} 
              color={props?.style?.tintColor || 'white'} 
            />
          )}
          style={drawerItemStyle}
        />
        <DrawerItem
          title={translate('settings', language)}
          accessoryLeft={props => (
            <Feather 
              name="settings" 
              size={24} 
              color={props?.style?.tintColor || 'white'} 
            />
          )}
          style={drawerItemStyle}
        />
      </Drawer>
    </DrawerContentScrollView>
  );
}

const DrawerHeader = styled.View`
  padding: ${({ theme }) => theme.spacing.lg}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.backgrounds.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

const AppName = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  font-weight: bold;
`;

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
`;

const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

const SearchIcon = styled(Feather)`
  margin-right: ${({ theme }) => theme.spacing.sm}px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
`;

const ResultsList = styled.View`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

const CityItem = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

const CityName = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  font-weight: bold;
`;

const CountryName = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 14px;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

const LoadingContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
  align-items: center;
`;

const drawerItemStyle = {
  height: 56,
  marginVertical: 4,
};