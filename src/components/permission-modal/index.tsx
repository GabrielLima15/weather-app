import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { useLanguage } from '../../contexts/language-context';
import { translate } from '../../utils/translations';

interface PermissionModalProps {
  visible: boolean;
  onAllow: () => void;
  onDeny: () => void;
  type: 'location' | 'notifications';
}

export function PermissionModal({ visible, onAllow, onDeny, type }: PermissionModalProps) {
  const { language } = useLanguage();

  const getIcon = () => {
    switch (type) {
      case 'location':
        return 'map-pin';
      case 'notifications':
        return 'bell';
      default:
        return 'help-circle';
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'location':
        return translate('locationPermissionTitle', language);
      case 'notifications':
        return translate('notificationPermissionTitle', language);
      default:
        return '';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'location':
        return translate('locationPermissionDescription', language);
      case 'notifications':
        return translate('notificationPermissionDescription', language);
      default:
        return '';
    }
  };

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
            <Feather name={getIcon()} size={32} color="white" />
          </IconContainer>

          <Title>{getTitle()}</Title>
          <Description>{getDescription()}</Description>

          <ButtonsContainer>
            <DenyButton onPress={onDeny}>
              <ButtonText>{translate('deny', language)}</ButtonText>
            </DenyButton>
            <AllowButton onPress={onAllow}>
              <ButtonText>{translate('allow', language)}</ButtonText>
            </AllowButton>
          </ButtonsContainer>
        </Container>
      </Overlay>
    </Modal>
  );
}

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

const Container = styled.View`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding: ${({ theme }) => theme.spacing.lg}px;
  width: 100%;
  max-width: 320px;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

const Description = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

const BaseButton = styled.TouchableOpacity`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  align-items: center;
`;

const DenyButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
`;

const AllowButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary[500]};
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  font-weight: bold;
`; 