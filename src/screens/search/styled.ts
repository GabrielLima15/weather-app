import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const SearchIcon = styled(Feather)`
  margin-right: ${({ theme }) => theme.spacing.sm}px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  padding: ${({ theme }) => theme.spacing.xs}px;
`;

export const ResultsList = styled.FlatList`
  flex: 1;
` as unknown as typeof FlatList;

export const CityItem = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const CityName = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: bold;
`;

export const CountryName = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 14px;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

export const EmptyState = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyStateText = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  text-align: center;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`; 