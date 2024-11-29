import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Container, Title, SettingSection } from './styled';
import { SUPPORTED_LANGUAGES } from '../../services/weather';
import { CitySelector } from '../../components/city-selector';
import { useWeatherQueries } from '../../hooks/queries/useWeatherQueries';
import { Select } from '../../components/form/select';
import { useLanguage } from '../../contexts/language-context';
import { translate } from '../../utils/translations';

export function SettingsScreen() {
  const { language, setLanguage } = useLanguage();
  const [selectedCity, setSelectedCity] = React.useState('São Paulo,SP');
  const { refreshWeather } = useWeatherQueries(selectedCity, { language });

  const languageOptions = Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  const handleLanguageSelect = (value: string) => {
    setLanguage(value as keyof typeof SUPPORTED_LANGUAGES);
    refreshWeather();
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    refreshWeather();
  };

  return (
    <Container>
      <View>
        <Title>{translate('settings', language)}</Title>
        
        <SettingSection>
          <Text category="h6" style={{ color: 'white', marginBottom: 8 }}>
            {translate('city', language)}
          </Text>
          <CitySelector
            selectedCity={selectedCity}
            onCityChange={handleCityChange}
            language={language}
          />
        </SettingSection>

        <SettingSection>
          <Text category="h6" style={{ color: 'white', marginBottom: 8 }}>
            {translate('language', language)}
          </Text>
          <Select
            value={language}
            options={languageOptions}
            onSelect={handleLanguageSelect}
            label={translate('language', language)}
          />
        </SettingSection>
      </View>
    </Container>
  );
} 