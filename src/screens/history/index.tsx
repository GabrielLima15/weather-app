import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Container, Title, Subtitle, HistoryCard, CardTitle, EmptyState, EmptyText, ErrorText } from './styled';
import { useHistoryController } from './controller';
import { WeatherHistory } from '../../components/weather/weather-history';
import { translate } from '../../utils/translations';
import { Feather } from '@expo/vector-icons';
import { CitySelector } from '../../components/city-selector';

export function HistoryScreen() {
  const { 
    history, 
    isLoading, 
    error, 
    language,
    selectedCity,
    handleCityChange 
  } = useHistoryController();

  return (
    <Container>
      <ScrollView>
        <Title>{translate('weatherHistory', language)}</Title>
        <Subtitle>{translate('selectCityToView', language)}</Subtitle>

        <HistoryCard>
          <CardTitle>{translate('city', language)}</CardTitle>
          <CitySelector
            selectedCity={selectedCity}
            onCityChange={handleCityChange}
            language={language}
          />
        </HistoryCard>

        {isLoading ? (
          <ActivityIndicator size="large" color="white" />
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : !history?.forecast?.forecastday ? (
          <EmptyState>
            <Feather name="clock" size={48} color="gray" />
            <EmptyText>{translate('noHistoryData', language)}</EmptyText>
          </EmptyState>
        ) : (
          <HistoryCard>
            <CardTitle>{translate('historyChart', language)}</CardTitle>
            <WeatherHistory history={history.forecast.forecastday} />
          </HistoryCard>
        )}
      </ScrollView>
    </Container>
  );
} 