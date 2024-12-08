import styled from 'styled-components/native';

export const Container = styled.View`
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

export const CityName = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 28px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  text-align: center;
`;

export const Temperature = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 64px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const WeatherInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: ${({ theme }) => theme.spacing.md}px;
`;

export const WeatherIcon = styled.Image`
  width: 96px;
  height: 96px;
`;

export const WeatherText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  font-weight: 500;
  margin-left: ${({ theme }) => theme.spacing.sm}px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
`;

export const DetailItem = styled.View`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

export const DetailLabel = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const DetailValue = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: bold;
`; 