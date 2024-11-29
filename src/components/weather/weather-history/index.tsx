import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Container, Title, ChartContainer } from './styled';
import { useLanguage } from '../../../contexts/language-context';
import { translate } from '../../../utils/translations';
import type { HistoricalWeather } from '../../../services/types/weather';
import { useTheme } from 'styled-components/native';
import { Dimensions } from 'react-native';

interface WeatherHistoryProps {
  history: HistoricalWeather[];
}

export function WeatherHistory({ history }: WeatherHistoryProps) {
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

  const data = {
    labels: history.map(day => day.date.split('-')[2]),
    datasets: [
      {
        data: history.map(day => getTemperature(day.day.avgtemp_c)),
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
    formatYLabel: (value: string) => {
      const temp = Math.round(Number(value));
      return `${temp}${language === 'en' ? '°F' : '°C'}`;
    },
  };

  return (
    <Container>
      <ChartContainer>
        <Title>{translate('historyChart', language)}</Title>
        <LineChart
          data={data}
          width={screenWidth}
          height={180}
          chartConfig={chartConfig}
          bezier
          withInnerLines={true}
          withOuterLines={false}
          withVerticalLabels={true}
          withHorizontalLabels={true}
          withVerticalLines={false}
          withHorizontalLines={true}
          segments={4}
          fromZero={false}
          transparent={true}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ChartContainer>
    </Container>
  );
} 