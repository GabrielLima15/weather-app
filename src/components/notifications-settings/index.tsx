import React from 'react';
import { Switch } from 'react-native';
import { useNotifications } from '../../contexts/notifications-context';
import { useLanguage } from '../../contexts/language-context';
import { translate } from '../../utils/translations';
import { PermissionModal } from '../permission-modal';
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
  const { settings, isGranted, requestPermission, updateSettings, scheduleWeatherAlert } = useNotifications();
  const { language } = useLanguage();
  const [showPermissionModal, setShowPermissionModal] = React.useState(false);

  const handleToggle = async (key: keyof typeof settings) => {
    if (!isGranted) {
      setShowPermissionModal(true);
      return;
    }

    await updateSettings({ [key]: !settings[key] });
  };

  const handlePermissionResponse = async (allowed: boolean) => {
    setShowPermissionModal(false);
    if (allowed) {
      await requestPermission();
    }
  };

  const handleTestNotification = async () => {
    if (settings.enabled) {
      if (settings.rainAlert) {
        await scheduleWeatherAlert('rainAlert', 'Teste de alerta de chuva! 🌧');
      }
      if (settings.temperatureAlert) {
        await scheduleWeatherAlert('temperatureAlert', 'Teste de alerta de temperatura! 🌡');
      }
      if (settings.windAlert) {
        await scheduleWeatherAlert('windAlert', 'Teste de alerta de vento! 💨');
      }
    }
  };

  return (
    <Container>
      <Title>{translate('notificationsTitle', language)}</Title>
      <Description>{translate('notificationsDescription', language)}</Description>

      <SettingItem>
        <SettingLabel>{translate('enableNotifications', language)}</SettingLabel>
        <Switch
          value={settings.enabled}
          onValueChange={() => handleToggle('enabled')}
        />
      </SettingItem>

      <Divider />

      <SettingItem>
        <SettingLabel>{translate('rainAlerts', language)}</SettingLabel>
        <Switch
          value={settings.rainAlert}
          onValueChange={() => handleToggle('rainAlert')}
          disabled={!settings.enabled}
        />
      </SettingItem>

      <SettingItem>
        <SettingLabel>{translate('temperatureAlerts', language)}</SettingLabel>
        <Switch
          value={settings.temperatureAlert}
          onValueChange={() => handleToggle('temperatureAlert')}
          disabled={!settings.enabled}
        />
      </SettingItem>

      <SettingItem>
        <SettingLabel>{translate('windAlerts', language)}</SettingLabel>
        <Switch
          value={settings.windAlert}
          onValueChange={() => handleToggle('windAlert')}
          disabled={!settings.enabled}
        />
      </SettingItem>

      {settings.enabled && (
        <TestButton onPress={handleTestNotification}>
          <TestButtonText>{translate('testNotifications', language)}</TestButtonText>
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