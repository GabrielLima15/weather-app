import React from 'react';
import { Select } from '../form/select';
import { translate } from '../../utils/translations';
import type { SupportedLanguage } from '../../services/weather';
import { Container, SelectContainer, Label } from './styled';
import { useCitySelectorController } from './controller';

interface CitySelectorProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
  language: SupportedLanguage;
}

export function CitySelector({ selectedCity, onCityChange, language }: CitySelectorProps) {
  const {
    selectedState,
    setSelectedState,
    stateOptions,
    cityOptions,
    disabled,
  } = useCitySelectorController(language, selectedCity);

  return (
    <Container>
      <SelectContainer>
        <Label>{translate('state', language)}</Label>
        <Select
          value={selectedState}
          options={stateOptions}
          onSelect={setSelectedState}
          placeholder={translate('selectState', language)}
        />
      </SelectContainer>

      <SelectContainer>
        <Label>{translate('city', language)}</Label>
        <Select
          value={selectedCity}
          options={cityOptions}
          onSelect={onCityChange}
          placeholder={translate('selectCity', language)}
          isDisabled={disabled}
        />
      </SelectContainer>
    </Container>
  );
} 