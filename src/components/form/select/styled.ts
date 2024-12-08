import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 14px;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const SelectButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SelectText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
`;

export const ModalOverlay = styled.Pressable`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.backgrounds.primary};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.lg}px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding-bottom: ${({ theme }) => theme.spacing.xl}px;
  max-height: 70%;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.backgrounds.tertiary};
`;

export const ModalTitle = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: bold;
`;

export const OptionButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme, isSelected }) => 
    isSelected ? theme.backgrounds.tertiary : 'transparent'};
`;

export const OptionText = styled.Text<{ isSelected: boolean }>`
  color: ${({ theme, isSelected }) => 
    isSelected ? theme.text.primary : theme.text.secondary};
  font-size: 16px;
`; 