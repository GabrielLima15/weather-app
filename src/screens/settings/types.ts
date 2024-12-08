import type { SupportedLanguage } from '../../services/weather';

export interface SettingsScreenProps {}

export interface SettingsScreenState {
  language: SupportedLanguage;
  selectedCity: string;
  languageOptions: Array<{
    label: string;
    value: string;
  }>;
  handleLanguageSelect: (value: string) => void;
  handleCityChange: (city: string) => void;
} 