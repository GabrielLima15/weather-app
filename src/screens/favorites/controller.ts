import { useFavorites } from '../../contexts/favorites-context';
import { useLanguage } from '../../contexts/language-context';

export function useFavoritesController() {
  const { favorites } = useFavorites();
  const { language } = useLanguage();

  return {
    favorites,
    language,
  };
} 