import React from 'react';
import { View, ActivityIndicator, SectionList } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, DrawerItem, IndexPath } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { translate } from '../../utils/translations';
import { useDrawerController } from './controller';
import {
  DrawerHeader,
  AppName,
  SearchContainer,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  SearchResultsContainer,
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

// Importando o tipo dos ícones do Feather
type FeatherIconName = React.ComponentProps<typeof Feather>['name'];

interface MenuItem {
  title: string;
  icon: FeatherIconName;
  route: string;
}

type SectionData = {
  title: 'search' | 'menu';
  data: SearchLocation[] | MenuItem[];
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

  const { navigation } = props;

  const sections: SectionData[] = [
    {
      title: 'search',
      data: searchTerm.length > 2 && cities?.length ? cities : [],
    },
    {
      title: 'menu',
      data: [
        {
          title: translate('weather', language),
          icon: 'cloud',
          route: 'Home',
        },
        {
          title: translate('favorites', language),
          icon: 'star',
          route: 'Favorites',
        },
        {
          title: translate('history', language),
          icon: 'clock',
          route: 'History',
        },
        {
          title: translate('settings', language),
          icon: 'settings',
          route: 'Settings',
        },
      ],
    },
  ];

  const renderItem = ({ item, section }: { item: SearchLocation | MenuItem; section: SectionData }) => {
    if (section.title === 'search') {
      const cityItem = item as SearchLocation;
      return (
        <CityItem 
          onPress={() => handleCitySelect(`${cityItem.name},${cityItem.region}`)}
        >
          <CityName>{cityItem.name}</CityName>
          <CountryName>{`${cityItem.region}, ${cityItem.country}`}</CountryName>
        </CityItem>
      );
    }

    const menuItem = item as MenuItem;
    return (
      <DrawerItem
        title={menuItem.title}
        accessoryLeft={() => (
          <Feather name={menuItem.icon} size={24} color="white" />
        )}
        onPress={() => navigation.navigate(menuItem.route)}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
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
      </SearchContainer>

      {isLoading && searchTerm.length > 2 ? (
        <LoadingContainer>
          <ActivityIndicator size="small" color="white" />
        </LoadingContainer>
      ) : (
        <SectionList<SearchLocation | MenuItem, SectionData>
          sections={sections}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          renderSectionHeader={() => null}
          stickySectionHeadersEnabled={false}
        />
      )}
    </View>
  );
}

const drawerItemStyle = {
  height: 56,
  marginVertical: 4,
};