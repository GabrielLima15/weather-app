import type { ForecastDay } from '../../../services/types/weather';

export interface ForecastListProps {
  data: ForecastDay[];
  language?: string;
} 