import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const NOTIFICATIONS_KEY = '@WeatherApp:notifications';

interface NotificationsSettings {
  enabled: boolean;
  rainAlert: boolean;
  temperatureAlert: boolean;
  windAlert: boolean;
}

interface NotificationsContextData {
  settings: NotificationsSettings;
  isGranted: boolean;
  requestPermission: () => Promise<void>;
  updateSettings: (newSettings: Partial<NotificationsSettings>) => Promise<void>;
  scheduleWeatherAlert: (type: keyof NotificationsSettings, message: string) => Promise<void>;
}

const defaultSettings: NotificationsSettings = {
  enabled: false,
  rainAlert: true,
  temperatureAlert: true,
  windAlert: true,
};

const NotificationsContext = createContext<NotificationsContextData>({} as NotificationsContextData);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<NotificationsSettings>(defaultSettings);
  const [isGranted, setIsGranted] = useState(false);

  useEffect(() => {
    loadSettings();
    checkPermission();
  }, []);

  async function loadSettings() {
    try {
      const storedSettings = await AsyncStorage.getItem(NOTIFICATIONS_KEY);
      if (storedSettings) {
        setSettings(JSON.parse(storedSettings));
      }
    } catch (error) {
      console.error('Error loading notification settings:', error);
    }
  }

  async function checkPermission() {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    setIsGranted(existingStatus === 'granted');
  }

  async function requestPermission() {
    const { status } = await Notifications.requestPermissionsAsync();
    setIsGranted(status === 'granted');

    if (status === 'granted') {
      await updateSettings({ enabled: true });
    }
  }

  async function updateSettings(newSettings: Partial<NotificationsSettings>) {
    try {
      const updatedSettings = { ...settings, ...newSettings };
      await AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updatedSettings));
      setSettings(updatedSettings);
    } catch (error) {
      console.error('Error saving notification settings:', error);
    }
  }

  async function scheduleWeatherAlert(type: keyof NotificationsSettings, message: string) {
    if (!settings.enabled || !settings[type] || !isGranted) return;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Alerta Meteorológico',
        body: message,
        data: { type },
      },
      trigger: null, // Notificação imediata
    });
  }

  return (
    <NotificationsContext.Provider 
      value={{ 
        settings, 
        isGranted, 
        requestPermission, 
        updateSettings,
        scheduleWeatherAlert 
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }

  return context;
} 