import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding: ${({ theme }) => theme.spacing.lg}px;
  width: 100%;
  max-width: 320px;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

const BaseButton = styled.TouchableOpacity`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  align-items: center;
`;

export const DenyButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
`;

export const AllowButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary[500]};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  font-weight: bold;
`; 