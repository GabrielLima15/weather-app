import { Dimensions } from 'react-native';
import { useLanguage } from '../../../contexts/language-context';
import { translate } from '../../../utils/translations';
import { useTheme } from 'styled-components/native';
import type { ForecastDay } from '../../../services/types/weather';
import type { ChartData, ChartConfig } from './types';

export function useWeatherHistoryController(history: ForecastDay[]) {
  const { language } = useLanguage();
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width - 64;

  if (!history?.length) return null;

  const getTemperature = (celsius: number) => {
    if (language === 'en') {
      return (celsius * 9/5) + 32;
    }
    return celsius;
  };

  const data: ChartData = {
    labels: history.map(day => day.date.split('-')[2]),
    datasets: [
      {
        data: history.map(day => getTemperature(day.day.avgtemp_c)),
        color: () => theme.colors.primary[500],
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig: ChartConfig = {
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
    formatYLabel: (value: string) => {
      const temp = Math.round(Number(value));
      return `${temp}${language === 'en' ? '°F' : '°C'}`;
    },
  };

  const translations = {
    title: translate('historyChart', language),
  };

  return {
    screenWidth,
    data,
    chartConfig,
    translations,
  };
} 