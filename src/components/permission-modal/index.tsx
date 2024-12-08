import React from 'react';
import { Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { usePermissionModalController } from './controller';
import type { PermissionModalProps } from './types';
import {
  Overlay,
  Container,
  IconContainer,
  Title,
  Description,
  ButtonsContainer,
  DenyButton,
  AllowButton,
  ButtonText,
} from './styled';

export function PermissionModal({ 
  visible, 
  onAllow, 
  onDeny, 
  type 
}: PermissionModalProps) {
  const { icon, translations } = usePermissionModalController(type);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <Overlay>
        <Container>
          <IconContainer>
            <Feather name={icon} size={32} color="white" />
          </IconContainer>

          <Title>{translations.title}</Title>
          <Description>{translations.description}</Description>

          <ButtonsContainer>
            <DenyButton onPress={onDeny}>
              <ButtonText>{translations.deny}</ButtonText>
            </DenyButton>
            <AllowButton onPress={onAllow}>
              <ButtonText>{translations.allow}</ButtonText>
            </AllowButton>
          </ButtonsContainer>
        </Container>
      </Overlay>
    </Modal>
  );
} 