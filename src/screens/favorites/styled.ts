import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  text-align: center;
`; 