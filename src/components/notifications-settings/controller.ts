import { useState } from 'react';
import { useNotifications } from '../../contexts/notifications-context';
import { useLanguage } from '../../contexts/language-context';
import { translate } from '../../utils/translations';
import type { NotificationSettings } from './types';

export function useNotificationsSettingsController() {
  const { settings, isGranted, requestPermission, updateSettings, scheduleWeatherAlert } = useNotifications();
  const { language } = useLanguage();
  const [showPermissionModal, setShowPermissionModal] = useState(false);

  const handleToggle = async (key: keyof NotificationSettings) => {
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

  const translations = {
    title: translate('notificationsTitle', language),
    description: translate('notificationsDescription', language),
    enableNotifications: translate('enableNotifications', language),
    rainAlerts: translate('rainAlerts', language),
    temperatureAlerts: translate('temperatureAlerts', language),
    windAlerts: translate('windAlerts', language),
    testNotifications: translate('testNotifications', language),
  };

  return {
    settings,
    showPermissionModal,
    handleToggle,
    handlePermissionResponse,
    handleTestNotification,
    translations,
  };
} 