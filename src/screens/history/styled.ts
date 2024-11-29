import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const HistoryCard = styled.View`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const EmptyState = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

export const EmptyText = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`; 