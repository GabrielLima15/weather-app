import type { ForecastDay } from '../../../services/types/weather';

export interface WeatherHistoryProps {
  history: ForecastDay[]; // Mudando de HistoricalWeather para ForecastDay que parece ser o tipo correto
}

export interface ChartData {
  labels: string[];
  datasets: Array<{
    data: number[];
    color: () => string;
    strokeWidth: number;
  }>;
}

export interface ChartConfig {
  backgroundColor: string;
  backgroundGradientFrom: string;
  backgroundGradientFromOpacity: number;
  backgroundGradientTo: string;
  backgroundGradientToOpacity: number;
  decimalPlaces: number;
  color: () => string;
  labelColor: () => string;
  propsForDots: {
    r: string;
    strokeWidth: string;
    stroke: string;
  };
  propsForBackgroundLines: {
    stroke: string;
    strokeDasharray: string;
    strokeWidth: number;
    opacity: number;
  };
  formatYLabel: (value: string) => string;
} 