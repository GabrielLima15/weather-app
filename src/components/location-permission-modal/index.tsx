import React from 'react';
import { Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useLocationPermissionModalController } from './controller';
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

interface LocationPermissionModalProps {
  visible: boolean;
  onAllow: () => void;
  onDeny: () => void;
}

export function LocationPermissionModal({ 
  visible, 
  onAllow, 
  onDeny 
}: LocationPermissionModalProps) {
  const { translations } = useLocationPermissionModalController();

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
            <Feather name="map-pin" size={32} color="white" />
          </IconContainer>

          <Title>{translations.title}</Title>
          <Description>{translations.description}</Description>

          <ButtonsContainer>
            <DenyButton onPress={onDeny}>
              <ButtonText>{translations.denyButton}</ButtonText>
            </DenyButton>
            <AllowButton onPress={onAllow}>
              <ButtonText>{translations.allowButton}</ButtonText>
            </AllowButton>
          </ButtonsContainer>
        </Container>
      </Overlay>
    </Modal>
  );
} 