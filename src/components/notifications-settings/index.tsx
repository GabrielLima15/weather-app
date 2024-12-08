import React from 'react';
import { Switch } from 'react-native';
import { PermissionModal } from '../permission-modal';
import { useNotificationsSettingsController } from './controller';
import {
  Container,
  Title,
  SettingItem,
  SettingLabel,
  Description,
  Divider,
  TestButton,
  TestButtonText
} from './styled';

export function NotificationsSettings() {
  const {
    settings,
    showPermissionModal,
    handleToggle,
    handlePermissionResponse,
    handleTestNotification,
    translations,
  } = useNotificationsSettingsController();

  return (
    <Container>
      <Title>{translations.title}</Title>
      <Description>{translations.description}</Description>

      <SettingItem>
        <SettingLabel>{translations.enableNotifications}</SettingLabel>
        <Switch
          value={settings.enabled}
          onValueChange={() => handleToggle('enabled')}
        />
      </SettingItem>

      <Divider />

      <SettingItem>
        <SettingLabel>{translations.rainAlerts}</SettingLabel>
        <Switch
          value={settings.rainAlert}
          onValueChange={() => handleToggle('rainAlert')}
          disabled={!settings.enabled}
        />
      </SettingItem>

      <SettingItem>
        <SettingLabel>{translations.temperatureAlerts}</SettingLabel>
        <Switch
          value={settings.temperatureAlert}
          onValueChange={() => handleToggle('temperatureAlert')}
          disabled={!settings.enabled}
        />
      </SettingItem>

      <SettingItem>
        <SettingLabel>{translations.windAlerts}</SettingLabel>
        <Switch
          value={settings.windAlert}
          onValueChange={() => handleToggle('windAlert')}
          disabled={!settings.enabled}
        />
      </SettingItem>

      {settings.enabled && (
        <TestButton onPress={handleTestNotification}>
          <TestButtonText>{translations.testNotifications}</TestButtonText>
        </TestButton>
      )}

      <PermissionModal
        visible={showPermissionModal}
        onAllow={() => handlePermissionResponse(true)}
        onDeny={() => handlePermissionResponse(false)}
        type="notifications"
      />
    </Container>
  );
} 