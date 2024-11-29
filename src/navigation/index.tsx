import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/home';
import { SettingsScreen } from '../screens/settings';
import { FavoritesScreen } from '../screens/favorites';
import { colors } from '../theme/colors';
import { Feather } from '@expo/vector-icons';
import { CustomDrawerContent } from '../components/drawer-content';
import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { useLanguage } from '../contexts/language-context';
import { translate } from '../utils/translations';

export type RootDrawerParamList = {
  Home: { city?: string } | undefined;
  Favorites: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.neutral[900],
  },
};

const screenOptions: DrawerNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.neutral[800],
  },
  headerTintColor: colors.neutral[100],
  headerTitleStyle: {
    fontWeight: '700' as const,
  },
  drawerStyle: {
    backgroundColor: colors.neutral[800],
  },
  drawerLabelStyle: {
    color: colors.neutral[100],
  },
  drawerActiveTintColor: colors.primary[500],
  drawerInactiveTintColor: colors.neutral[400],
};

export function Navigation() {
  const { language } = useLanguage();

  return (
    <NavigationContainer theme={NavigationTheme}>
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={screenOptions}
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            title: translate('weather', language),
          }}
        />
        <Drawer.Screen 
          name="Favorites" 
          component={FavoritesScreen}
          options={{ 
            title: translate('favorites', language),
          }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{ 
            title: translate('settings', language),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} 