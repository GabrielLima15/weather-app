import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Container, Title, ChartContainer } from './styled';
import { useWeatherHistoryController } from './controller';
import type { WeatherHistoryProps } from './types';

export function WeatherHistory({ history }: WeatherHistoryProps) {
  const result = useWeatherHistoryController(history);
  
  if (!result) return null;
  const { screenWidth, data, chartConfig, translations } = result;

  return (
    <Container>
      <ChartContainer>
        <Title>{translations.title}</Title>
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