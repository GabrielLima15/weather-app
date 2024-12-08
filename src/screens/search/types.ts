import type { SearchLocation } from '../../services/types/api';
import type { SupportedLanguage } from '../../services/weather';

export interface SearchScreenProps {}

export interface SearchScreenState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  cities: SearchLocation[] | undefined;
  isLoading: boolean;
  language: SupportedLanguage;
  handleCitySelect: (city: string) => void;
} 