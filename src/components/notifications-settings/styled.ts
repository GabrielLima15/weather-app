import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const SettingItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md}px 0;
`;

export const SettingLabel = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing.md}px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
  margin: ${({ theme }) => theme.spacing.md}px 0;
`;

export const TestButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  align-items: center;
`;

export const TestButtonText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  font-weight: bold;
`; 