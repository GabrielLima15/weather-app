import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Container, Title, ChartContainer } from './styled';
import { useLanguage } from '../../../contexts/language-context';
import { translate } from '../../../utils/translations';
import type { ForecastDay } from '../../../services/types/weather';
import { useTheme } from 'styled-components/native';

interface WeatherChartsProps {
  forecast: ForecastDay[];
}

export function WeatherCharts({ forecast }: WeatherChartsProps) {
  const { language } = useLanguage();
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width - 64;

  if (!forecast?.length || !Array.isArray(forecast)) return null;

  const validData = forecast.filter(day => 
    day?.day?.avgtemp_c !== undefined && 
    day?.date !== undefined
  );

  if (validData.length === 0) return null;

  const temperatureData = {
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

  return (
    <Container>
      <ChartContainer>
        <Title>{translate('temperatureChart', language)}</Title>
        <LineChart
          data={temperatureData}
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