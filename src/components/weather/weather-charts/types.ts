import type { ForecastDay } from '../../../services/types/weather';

export interface WeatherChartsProps {
  forecast: ForecastDay[];
}

export interface ChartData {
  labels: string[];
  datasets: Array<{
    data: number[];
    color: () => string;
    strokeWidth: number;
  }>;
} 