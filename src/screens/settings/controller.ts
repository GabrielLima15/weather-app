import { useState } from 'react';
import { useLanguage } from '../../contexts/language-context';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { RootDrawerParamList } from '../../navigation';
import { SUPPORTED_LANGUAGES } from '../../services/weather';
import type { SettingsScreenState } from './types';

type NavigationProp = DrawerNavigationProp<RootDrawerParamList>;

export function useSettingsController(): SettingsScreenState {
  const { language, setLanguage } = useLanguage();
  const navigation = useNavigation<NavigationProp>();
  const [selectedCity, setSelectedCity] = useState('São Paulo,SP');

  const languageOptions = Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  const handleLanguageSelect = (value: string) => {
    setLanguage(value as keyof typeof SUPPORTED_LANGUAGES);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    navigation.navigate('Home', { city });
  };

  return {
    language,
    selectedCity,
    languageOptions,
    handleLanguageSelect,
    handleCityChange,
  };
} 