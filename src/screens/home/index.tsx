import React from 'react';
import { ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Container } from './styled';
import { useHomeController } from './controller';
import { CurrentWeather } from '../../components/weather/current-weather';
import { ForecastList } from '../../components/weather/forecast-list';
import { useLanguage } from '../../contexts/language-context';

export function HomeScreen() {
  const { language } = useLanguage();
  const { currentWeather, forecast, isLoading, error, refreshWeather } = useHomeController();

  if (isLoading && !currentWeather) {
    return (
      <Container>
        <ActivityIndicator size="large" color="white" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Text status="danger">{error}</Text>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        removeClippedSubviews={true}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refreshWeather}
            tintColor="white"
          />
        }
      >
        {currentWeather && <CurrentWeather data={currentWeather} language={language} />}
        {forecast && <ForecastList data={forecast.forecast.forecastday} language={language} />}
      </ScrollView>
    </Container>
  );
} 