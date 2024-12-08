import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
`;

export const ForecastContainer = styled.View`
  flex-direction: row;
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
`;

export const ForecastItem = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  margin-right: ${({ theme }) => theme.spacing.sm}px;
  align-items: center;
  width: ${({ theme }) => theme.spacing.xl * 4}px;
`;

export const DayText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const WeatherIcon = styled.Image`
  width: 48px;
  height: 48px;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const MaxTemp = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  font-weight: bold;
  margin-right: ${({ theme }) => theme.spacing.sm}px;
`;

export const MinTemp = styled.Text`
  color: ${({ theme }) => theme.text.tertiary};
  font-size: 16px;
`; 