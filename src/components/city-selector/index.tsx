import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Select } from '../form/select';
import { translate } from '../../utils/translations';
import { getDefaultStates } from '../../utils/defaultCities';
import type { SupportedLanguage } from '../../services/weather';
import styled from 'styled-components/native';

interface CitySelectorProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
  language: SupportedLanguage;
}

export function CitySelector({ selectedCity, onCityChange, language }: CitySelectorProps) {
  const states = getDefaultStates(language);
  const [selectedState, setSelectedState] = useState('');
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  const stateOptions = states.map(state => ({
    label: state.name,
    value: state.name,
  }));

  const cityOptions = availableCities.map(city => ({
    label: city,
    value: `${city}, ${selectedState}`,
  }));

  useEffect(() => {
    if (selectedState) {
      const state = states.find(s => s.name === selectedState);
      setAvailableCities(state?.cities || []);
    } else {
      setAvailableCities([]);
    }
  }, [selectedState, language]);

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
          disabled={!selectedState}
        />
      </SelectContainer>
    </Container>
  );
}

const Container = styled.View`
  gap: ${({ theme }) => theme.spacing.md}px;
`;

const SelectContainer = styled.View`
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 14px;
`; 