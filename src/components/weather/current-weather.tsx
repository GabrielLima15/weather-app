import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import styled from 'styled-components/native';
import type { WeatherResponse } from '../../services/types/weather';
import { translateCity } from '../../utils/cityTranslations';
import { useWeatherQueries } from '../../hooks/queries/useWeatherQueries';
import { translate } from '../../utils/translations';
import { getCityKey } from '../../utils/cityMapping';

interface CurrentWeatherProps {
  data: WeatherResponse;
  language?: string;
}

export function CurrentWeather({ data, language = 'pt_br' }: CurrentWeatherProps) {
  const cityKey = getCityKey(data.location.name);
  const cityName = translateCity(cityKey, language);

  return (
    <Container>
      <CityName>{cityName}</CityName>
      <Temperature>{Math.round(data.current.temp_c)}°C</Temperature>
      <WeatherInfo>
        <WeatherIcon 
          source={{ uri: `https:${data.current.condition.icon}` }} 
          resizeMode="contain"
        />
        <WeatherText>{data.current.condition.text}</WeatherText>
      </WeatherInfo>
      <DetailsContainer>
        <DetailItem>
          <DetailLabel>{translate('humidity', language)}</DetailLabel>
          <DetailValue>{data.current.humidity}%</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>{translate('wind', language)}</DetailLabel>
          <DetailValue>{data.current.wind_kph} km/h</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>{translate('feelsLike', language)}</DetailLabel>
          <DetailValue>{Math.round(data.current.feelslike_c)}°C</DetailValue>
        </DetailItem>
      </DetailsContainer>
    </Container>
  );
}

const Container = styled.View`
  padding: ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  align-items: center;
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

const CityName = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 28px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  text-align: center;
`;

const Temperature = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 64px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const WeatherInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: ${({ theme }) => theme.spacing.md}px;
`;

const WeatherIcon = styled.Image`
  width: 96px;
  height: 96px;
`;

const WeatherText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  font-weight: 500;
  margin-left: ${({ theme }) => theme.spacing.sm}px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const DetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
`;

const DetailItem = styled.View`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

const DetailLabel = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  margin-bottom: 4px;
`;

const DetailValue = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: bold;
`; 