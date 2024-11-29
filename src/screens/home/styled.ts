import styled from 'styled-components/native';
import { Layout } from '@ui-kitten/components';

export const Container = styled(Layout)`
  flex: 1;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  font-weight: bold;
`; 