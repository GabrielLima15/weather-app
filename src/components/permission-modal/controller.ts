import { useLanguage } from '../../contexts/language-context';
import { translate } from '../../utils/translations';
import type { PermissionType, FeatherIconName } from './types';

export function usePermissionModalController(type: PermissionType) {
  const { language } = useLanguage();

  const getIcon = (): FeatherIconName => {
    switch (type) {
      case 'location':
        return 'map-pin';
      case 'notifications':
        return 'bell';
      default:
        return 'help-circle';
    }
  };

  const translations = {
    title: type === 'location' 
      ? translate('locationPermissionTitle', language)
      : translate('notificationPermissionTitle', language),
    description: type === 'location'
      ? translate('locationPermissionDescription', language)
      : translate('notificationPermissionDescription', language),
    deny: translate('deny', language),
    allow: translate('allow', language),
  };

  return {
    icon: getIcon(),
    translations,
  };
} 