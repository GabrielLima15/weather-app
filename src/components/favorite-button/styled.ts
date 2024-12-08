import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md}px;
  top: ${({ theme }) => theme.spacing.md}px;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
`; 