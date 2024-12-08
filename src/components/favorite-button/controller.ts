import { useFavorites } from '../../contexts/favorites-context';

export function useFavoriteButtonController(city: string) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const isCityFavorite = isFavorite(city);

  const handlePress = async () => {
    if (isCityFavorite) {
      await removeFavorite(city);
    } else {
      await addFavorite(city);
    }
  };

  return {
    isCityFavorite,
    handlePress,
  };
} 