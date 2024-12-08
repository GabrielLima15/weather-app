import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Title, SettingSection, SectionTitle } from './styled';
import { CitySelector } from '../../components/city-selector';
import { translate } from '../../utils/translations';
import { NotificationsSettings } from '../../components/notifications-settings';
import { Select } from '../../components/form/select';
import { useSettingsController } from './controller';

export function SettingsScreen() {
  const {
    language,
    selectedCity,
    languageOptions,
    handleLanguageSelect,
    handleCityChange,
  } = useSettingsController();

  return (
    <Container>
      <ScrollView>
        <Title>{translate('settings', language)}</Title>
        
        <SettingSection>
          <SectionTitle>{translate('city', language)}</SectionTitle>
          <CitySelector
            selectedCity={selectedCity}
            onCityChange={handleCityChange}
            language={language}
          />
        </SettingSection>

        <SettingSection>
          <SectionTitle>{translate('language', language)}</SectionTitle>
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