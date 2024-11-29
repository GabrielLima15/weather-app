import { useNavigation } from '@react-navigation/native';
import { useFavorites } from '../../contexts/favorites-context';
import type { RootDrawerParamList } from '../../navigation';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

type NavigationProp = DrawerNavigationProp<RootDrawerParamList>;

export function useFavoriteItemController(city: string) {
  const navigation = useNavigation<NavigationProp>();
  const { removeFavorite } = useFavorites();

  const handlePress = () => {
    navigation.navigate('Home', { city });
  };

  const handleRemove = async () => {
    await removeFavorite(city);
  };

  return {
    handlePress,
    handleRemove,
  };
} 