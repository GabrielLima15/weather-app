import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Container, Title, ChartContainer } from './styled';
import { useWeatherChartsController } from './controller';
import type { WeatherChartsProps } from './types';

export function WeatherCharts({ forecast }: WeatherChartsProps) {
  const result = useWeatherChartsController(forecast);

  if (!result) return null;
  const { isValid, screenWidth, temperatureData, chartConfig, translations } = result;
  if (!isValid) return null;

  return (
    <Container>
      <ChartContainer>
        <Title>{translations.title}</Title>
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