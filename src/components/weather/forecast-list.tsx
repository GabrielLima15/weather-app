import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import type { ForecastDay } from '../../services/types/weather';
import { translate, translateWeekDay } from '../../utils/translations';

interface ForecastListProps {
  data: ForecastDay[];
  language?: string;
}

export function ForecastList({ data, language = 'pt_br' }: ForecastListProps) {
  return (
    <Container>
      <Title>{translate('forecast', language)}</Title>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        disableScrollViewPanResponder={true}
        removeClippedSubviews={true}
      >
        {data.map((item) => (
          <ForecastItem key={item.date}>
            <DayText>
              {translateWeekDay(new Date(item.date), language)}
            </DayText>
            <WeatherIcon source={{ uri: `https:${item.day.condition.icon}` }} />
            <TemperatureContainer>
              <MaxTemp>{Math.round(item.day.maxtemp_c)}°</MaxTemp>
              <MinTemp>{Math.round(item.day.mintemp_c)}°</MinTemp>
            </TemperatureContainer>
          </ForecastItem>
        ))}
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
`;

const ForecastContainer = styled.View`
  flex-direction: row;
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
`;

const ForecastItem = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  margin-right: ${({ theme }) => theme.spacing.sm}px;
  align-items: center;
  width: ${({ theme }) => theme.spacing.xl * 4}px;
`;

const DayText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

const WeatherIcon = styled.Image`
  width: 48px;
  height: 48px;
`;

const TemperatureContainer = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

const MaxTemp = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  font-weight: bold;
  margin-right: ${({ theme }) => theme.spacing.sm}px;
`;

const MinTemp = styled.Text`
  color: ${({ theme }) => theme.text.tertiary};
  font-size: 16px;
`; 