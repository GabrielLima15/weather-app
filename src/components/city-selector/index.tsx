import React from 'react';
import styled from 'styled-components/native';
import { Select } from '../form/select';
import { weatherService } from '../../services/weather';
import { translateCity } from '../../utils/cityTranslations';

interface CitySelectorProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
  language?: string;
}

export function CitySelector({ selectedCity, onCityChange, language = 'pt_br' }: CitySelectorProps) {
  const options = weatherService.getBrazilianCities().map(city => ({
    label: translateCity(city, language),
    value: city,
  }));

  return (
    <Container>
      <Select
        value={selectedCity}
        options={options}
        onSelect={onCityChange}
        label="Cidade"
      />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
`; 