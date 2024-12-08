import { useLanguage } from '../../contexts/language-context';
import { translate } from '../../utils/translations';

export function useLocationPermissionModalController() {
  const { language } = useLanguage();

  const translations = {
    title: translate('locationPermissionTitle', language),
    description: translate('locationPermissionDescription', language),
    denyButton: translate('deny', language),
    allowButton: translate('allow', language),
  };

  return {
    translations,
  };
} 