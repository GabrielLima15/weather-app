import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Container, Title, Subtitle, HistoryCard, CardTitle, EmptyState, EmptyText } from './styled';
import { useHistoryController } from './controller';
import { WeatherHistory } from '../../components/weather/weather-history';
import { translate } from '../../utils/translations';
import { Text } from '@ui-kitten/components';
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
          <Text status="danger">{error}</Text>
        ) : !history ? (
          <EmptyState>
            <Feather name="clock" size={48} color="gray" />
            <EmptyText>{translate('noHistoryData', language)}</EmptyText>
          </EmptyState>
        ) : (
          <HistoryCard>
            <CardTitle>{translate('temperatureHistory', language)}</CardTitle>
            <WeatherHistory history={history} />
          </HistoryCard>
        )}
      </ScrollView>
    </Container>
  );
} 