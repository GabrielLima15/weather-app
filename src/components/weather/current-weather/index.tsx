import React from 'react';
import { useCurrentWeatherController } from './controller';
import type { CurrentWeatherProps } from './types';
import {
  Container,
  CityName,
  Temperature,
  WeatherInfo,
  WeatherIcon,
  WeatherText,
  DetailsContainer,
  DetailItem,
  DetailLabel,
  DetailValue,
} from './styled';

export function CurrentWeather({ data, language = 'pt_br' }: CurrentWeatherProps) {
  const { cityName, translations, weatherData } = useCurrentWeatherController(data, language);

  return (
    <Container>
      <CityName>{cityName}</CityName>
      <Temperature>{weatherData.temperature}°C</Temperature>
      <WeatherInfo>
        <WeatherIcon 
          source={{ uri: weatherData.condition.icon }} 
          resizeMode="contain"
        />
        <WeatherText>{weatherData.condition.text}</WeatherText>
      </WeatherInfo>
      <DetailsContainer>
        <DetailItem>
          <DetailLabel>{translations.humidity}</DetailLabel>
          <DetailValue>{weatherData.humidity}%</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>{translations.wind}</DetailLabel>
          <DetailValue>{weatherData.windSpeed} km/h</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>{translations.feelsLike}</DetailLabel>
          <DetailValue>{weatherData.feelsLike}°C</DetailValue>
        </DetailItem>
      </DetailsContainer>
    </Container>
  );
} 