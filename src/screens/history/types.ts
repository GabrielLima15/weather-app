import type { HistoryResponse } from '../../services/types/weather';
import type { SupportedLanguage } from '../../services/weather';

export interface HistoryScreenProps {}

export interface HistoryScreenState {
  history: HistoryResponse | null;
  isLoading: boolean;
  error: string | null;
  language: SupportedLanguage;
  selectedCity: string;
  handleCityChange: (city: string) => void;
} 