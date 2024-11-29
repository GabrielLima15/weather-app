import React, { useState } from 'react';
import { TouchableOpacity, Modal, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function Select({ value, options, onSelect, placeholder = 'Selecione...', label }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(option => option.value === value);

  const handleSelect = (option: Option) => {
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <SelectButton onPress={() => setIsOpen(true)}>
        <SelectText>
          {selectedOption ? selectedOption.label : placeholder}
        </SelectText>
        <Feather 
          name={isOpen ? "chevron-up" : "chevron-down"} 
          size={20} 
          color="white" 
        />
      </SelectButton>

      <Modal
        visible={isOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
      >
        <ModalOverlay onPress={() => setIsOpen(false)}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>{label || 'Selecione uma opção'}</ModalTitle>
              <TouchableOpacity onPress={() => setIsOpen(false)}>
                <Feather name="x" size={24} color="white" />
              </TouchableOpacity>
            </ModalHeader>

            <FlatList
              data={options}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <OptionButton 
                  onPress={() => handleSelect(item)}
                  isSelected={item.value === value}
                >
                  <OptionText isSelected={item.value === value}>
                    {item.label}
                  </OptionText>
                  {item.value === value && (
                    <Feather name="check" size={20} color="white" />
                  )}
                </OptionButton>
              )}
            />
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 14px;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

const SelectButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SelectText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
`;

const ModalOverlay = styled.Pressable`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.backgrounds.primary};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.lg}px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding-bottom: ${({ theme }) => theme.spacing.xl}px;
  max-height: 70%;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.backgrounds.tertiary};
`;

const ModalTitle = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: bold;
`;

const OptionButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme, isSelected }) => 
    isSelected ? theme.backgrounds.tertiary : 'transparent'};
`;

const OptionText = styled.Text<{ isSelected: boolean }>`
  color: ${({ theme, isSelected }) => 
    isSelected ? theme.text.primary : theme.text.secondary};
  font-size: 16px;
`; 