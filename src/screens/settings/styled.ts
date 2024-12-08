import styled from 'styled-components/native';
import { Layout } from '@ui-kitten/components';

export const Container = styled(Layout)`
  flex: 1;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  padding: ${({ theme }) => theme.spacing.md}px;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const SettingSection = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`; 