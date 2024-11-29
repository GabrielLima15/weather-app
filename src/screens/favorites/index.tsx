import React from 'react';
import { ScrollView } from 'react-native';
import { translate } from '../../utils/translations';
import { Container, EmptyContainer, EmptyText } from './styled';
import { Feather } from '@expo/vector-icons';

import { useFavoritesController } from './controller';
import { FavoriteItem } from '../../components/favorite-item';

export function FavoritesScreen() {
  const { favorites, language } = useFavoritesController();

  if (favorites.length === 0) {
    return (
      <Container>
        <EmptyContainer>
          <Feather name="star" size={48} color="gray" />
          <EmptyText>{translate('noFavorites', language)}</EmptyText>
        </EmptyContainer>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView>
        {favorites.map((city) => (
          <FavoriteItem key={city} city={city} />
        ))}
      </ScrollView>
    </Container>
  );
} 