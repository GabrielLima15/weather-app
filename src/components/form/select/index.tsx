import React from 'react';
import { TouchableOpacity, Modal, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSelectController } from './controller';
import type { SelectProps, Option } from './types';
import {
  Container,
  SelectButton,
  SelectText,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  OptionButton,
  OptionText,
} from './styled';

export function Select({ 
  value, 
  options, 
  onSelect, 
  placeholder = 'Selecione...', 
  isDisabled 
}: SelectProps) {
  const {
    isOpen,
    setIsOpen,
    selectedOption,
    handleSelect,
  } = useSelectController(value, options);

  return (
    <Container>
      <SelectButton onPress={() => !isDisabled && setIsOpen(true)}>
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
              <ModalTitle>Selecione uma opção</ModalTitle>
              <TouchableOpacity onPress={() => setIsOpen(false)}>
                <Feather name="x" size={24} color="white" />
              </TouchableOpacity>
            </ModalHeader>

            <FlatList
              data={options}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <OptionButton 
                  onPress={() => handleSelect(item, onSelect)}
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