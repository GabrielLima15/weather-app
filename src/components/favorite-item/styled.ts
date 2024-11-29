import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  overflow: hidden;
`;

export const TouchableContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const CityInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CityName = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  margin-left: ${({ theme }) => theme.spacing.sm}px;
`;

export const RemoveButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.sm}px;
`; 