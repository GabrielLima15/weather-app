import styled from 'styled-components/native';
import { Layout } from '@ui-kitten/components';

export const Container = styled(Layout)`
  flex: 1;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const LoadingContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export const ErrorContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: 16px;
  text-align: center;
`;

export const LocationButton = styled.TouchableOpacity`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md}px;
  top: ${({ theme }) => theme.spacing.md}px;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})``; 