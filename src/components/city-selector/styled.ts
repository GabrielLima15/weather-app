import styled from 'styled-components/native';

export const Container = styled.View`
  gap: ${({ theme }) => theme.spacing.md}px;
`;

export const SelectContainer = styled.View`
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 14px;
`; 