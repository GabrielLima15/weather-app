import { Feather } from '@expo/vector-icons';

export type PermissionType = 'location' | 'notifications';

export type FeatherIconName = keyof typeof Feather.glyphMap;

export interface PermissionModalProps {
  visible: boolean;
  onAllow: () => void;
  onDeny: () => void;
  type: PermissionType;
} 