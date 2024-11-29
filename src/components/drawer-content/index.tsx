import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, DrawerItem, IndexPath } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { translate } from '../../utils/translations';
import { ActivityIndicator } from 'react-native';
import { useDrawerController } from './controller';
import {
  DrawerHeader,
  AppName,
  SearchContainer,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  ResultsList,
  CityItem,
  CityName,
  CountryName,
  LoadingContainer,
} from './styled';

interface SearchLocation {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
}

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const {
    language,
    searchTerm,
    setSearchTerm,
    cities,
    isLoading,
    handleSelect,
    handleCitySelect,
    state,
  } = useDrawerController(props);

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

        {isLoading && searchTerm.length > 2 ? (
          <LoadingContainer>
            <ActivityIndicator size="small" color="white" />
          </LoadingContainer>
        ) : searchTerm.length > 2 && cities?.length ? (
          <ResultsList>
            {cities.map((city: SearchLocation) => (
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
          accessoryLeft={() => (
            <Feather name="cloud" size={24} color="white" />
          )}
        />
        <DrawerItem
          title={translate('favorites', language)}
          accessoryLeft={() => (
            <Feather name="star" size={24} color="white" />
          )}
        />
        <DrawerItem
          title={translate('history', language)}
          accessoryLeft={() => (
            <Feather name="clock" size={24} color="white" />
          )}
        />
        <DrawerItem
          title={translate('settings', language)}
          accessoryLeft={() => (
            <Feather name="settings" size={24} color="white" />
          )}
        />
      </Drawer>
    </DrawerContentScrollView>
  );
}

const drawerItemStyle = {
  height: 56,
  marginVertical: 4,
};