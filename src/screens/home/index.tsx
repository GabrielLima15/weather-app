import React from 'react';
import { ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Container } from './styled';
import { useHomeController } from './controller';
import { CurrentWeather } from '../../components/weather/current-weather';
import { ForecastList } from '../../components/weather/forecast-list';
import { useLanguage } from '../../contexts/language-context';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { LocationPermissionModal } from '../../components/location-permission-modal';

export function HomeScreen() {
  const { language } = useLanguage();
  const { 
    currentWeather, 
    forecast, 
    isLoading, 
    error, 
    refreshWeather,
    requestLocation,
    showPermissionModal,
    handlePermissionResponse,
  } = useHomeController();

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
      <LocationButton onPress={requestLocation}>
        <Feather name="navigation" size={24} color="white" />
      </LocationButton>
      
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

      <LocationPermissionModal
        visible={showPermissionModal}
        onAllow={() => handlePermissionResponse(true)}
        onDeny={() => handlePermissionResponse(false)}
      />
    </Container>
  );
}

const LocationButton = styled.TouchableOpacity`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md}px;
  top: ${({ theme }) => theme.spacing.md}px;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
`; 