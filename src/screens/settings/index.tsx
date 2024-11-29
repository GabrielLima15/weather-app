import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Container, Title, SettingSection } from './styled';
import { SUPPORTED_LANGUAGES } from '../../services/weather';
import { CitySelector } from '../../components/city-selector';
import { useLanguage } from '../../contexts/language-context';
import { translate } from '../../utils/translations';
import { NotificationsSettings } from '../../components/notifications-settings';
import { Select } from '../../components/form/select';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { RootDrawerParamList } from '../../navigation';

type NavigationProp = DrawerNavigationProp<RootDrawerParamList>;

export function SettingsScreen() {
  const { language, setLanguage } = useLanguage();
  const navigation = useNavigation<NavigationProp>();
  const [selectedCity, setSelectedCity] = React.useState('São Paulo,SP');

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

  return (
    <Container>
      <ScrollView>
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
            placeholder={translate('language', language)}
          />
        </SettingSection>

        <SettingSection>
          <NotificationsSettings />
        </SettingSection>
      </ScrollView>
    </Container>
  );
} 