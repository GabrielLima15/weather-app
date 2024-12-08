import React from 'react';
import { ScrollView } from 'react-native';
import { useForecastListController } from './controller';
import type { ForecastListProps } from './types';
import {
  Container,
  Title,
  ForecastItem,
  DayText,
  WeatherIcon,
  TemperatureContainer,
  MaxTemp,
  MinTemp,
} from './styled';

export function ForecastList({ data, language = 'pt_br' }: ForecastListProps) {
  const { translations, forecastItems } = useForecastListController(data, language);

  return (
    <Container>
      <Title>{translations.title}</Title>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        disableScrollViewPanResponder={true}
        removeClippedSubviews={true}
      >
        {forecastItems.map((item) => (
          <ForecastItem key={item.key}>
            <DayText>{item.day}</DayText>
            <WeatherIcon source={{ uri: item.icon }} />
            <TemperatureContainer>
              <MaxTemp>{item.maxTemp}°</MaxTemp>
              <MinTemp>{item.minTemp}°</MinTemp>
            </TemperatureContainer>
          </ForecastItem>
        ))}
      </ScrollView>
    </Container>
  );
} 