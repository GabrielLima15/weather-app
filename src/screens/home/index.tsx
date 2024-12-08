import React from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useLanguage } from '../../contexts/language-context';
import { useHomeController } from './controller';
import { CurrentWeather } from '../../components/weather/current-weather';
import { ForecastList } from '../../components/weather/forecast-list';
import { WeatherCharts } from '../../components/weather/weather-charts';
import { PermissionModal } from '../../components/permission-modal';
import { FavoriteButton } from '../../components/favorite-button';
import { WeatherHistory } from '../../components/weather/weather-history';
import {
  Container,
  LoadingContainer,
  ErrorContainer,
  ErrorText,
  LocationButton,
  ScrollContainer,
} from './styled';

export function HomeScreen() {
  const { language } = useLanguage();
  const { 
    currentWeather, 
    forecast, 
    history,
    isLoading, 
    error, 
    refreshWeather,
    requestLocation,
    showPermissionModal,
    handlePermissionResponse,
  } = useHomeController();

  if (isLoading && !currentWeather) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="white" />
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorText>
          {typeof error === 'string' ? error : 'Ocorreu um erro'}
        </ErrorText>
      </ErrorContainer>
    );
  }

  return (
    <Container>
      <LocationButton onPress={requestLocation}>
        <Feather name="navigation" size={24} color="white" />
      </LocationButton>
      
      {currentWeather && (
        <FavoriteButton city={currentWeather.location.name} />
      )}
      
      <ScrollContainer
        showsVerticalScrollIndicator={false}
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
        {forecast?.forecast?.forecastday && (
          <ForecastList data={forecast.forecast.forecastday} language={language} />
        )}
        {forecast?.forecast?.forecastday && (
          <WeatherCharts forecast={forecast.forecast.forecastday} />
        )}
        {history?.forecast?.forecastday && (
          <WeatherHistory history={history.forecast.forecastday} />
        )}
      </ScrollContainer>

      <PermissionModal
        visible={showPermissionModal}
        onAllow={() => handlePermissionResponse(true)}
        onDeny={() => handlePermissionResponse(false)}
        type="location"
      />
    </Container>
  );
} 