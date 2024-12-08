import { Dimensions } from 'react-native';
import { useLanguage } from '../../../contexts/language-context';
import { translate } from '../../../utils/translations';
import { useTheme } from 'styled-components/native';
import type { ForecastDay } from '../../../services/types/weather';
import type { ChartData } from './types';

export function useWeatherChartsController(forecast: ForecastDay[]) {
  const { language } = useLanguage();
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width - 64;

  if (!forecast?.length || !Array.isArray(forecast)) return null;

  const validData = forecast.filter(day => 
    day?.day?.avgtemp_c !== undefined && 
    day?.date !== undefined
  );

  if (validData.length === 0) return null;

  const temperatureData: ChartData = {
    labels: validData.map(day => day.date.split('-')[2]),
    datasets: [
      {
        data: validData.map(day => day.day.avgtemp_c),
        color: () => theme.colors.primary[500],
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: 'transparent',
    backgroundGradientFrom: theme.backgrounds.secondary,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: theme.backgrounds.secondary,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: () => theme.text.secondary,
    labelColor: () => theme.text.secondary,
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: theme.colors.primary[500],
    },
    propsForBackgroundLines: {
      stroke: theme.backgrounds.tertiary,
      strokeDasharray: '5, 5',
      strokeWidth: 1,
      opacity: 0.5,
    },
    formatYLabel: (value: string) => `${Math.round(Number(value))}°`,
    yAxisInterval: 1,
    yAxisSuffix: '°',
    xAxisLabel: '',
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 0,
  };

  const translations = {
    title: translate('temperatureChart', language),
  };

  return {
    isValid: validData.length > 0,
    screenWidth,
    temperatureData,
    chartConfig,
    translations,
  };
} 