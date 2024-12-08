import { useState, useEffect } from 'react';
import { getDefaultStates } from '../../utils/defaultCities';
import type { SupportedLanguage } from '../../services/weather';

export function useCitySelectorController(
  language: SupportedLanguage,
  selectedCity: string
) {
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

  return {
    selectedState,
    setSelectedState,
    stateOptions,
    cityOptions,
    disabled: !selectedState,
  };
} 