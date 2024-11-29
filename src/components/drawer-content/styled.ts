import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const DrawerHeader = styled.View`
  padding: ${({ theme }) => theme.spacing.lg}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.backgrounds.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const AppName = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  font-weight: bold;
`;

export const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.backgrounds.tertiary};
`;

export const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

export const SearchIcon = styled(Feather)`
  margin-right: ${({ theme }) => theme.spacing.sm}px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
`;

export const ResultsList = styled.View`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const CityItem = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const CityName = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  font-weight: bold;
`;

export const CountryName = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 14px;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

export const LoadingContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
  align-items: center;
`; 