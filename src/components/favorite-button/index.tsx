import React from 'react';
import { Feather } from '@expo/vector-icons';
import { ButtonContainer } from './styled';
import { useFavoriteButtonController } from './controller';

interface FavoriteButtonProps {
  city: string;
}

export function FavoriteButton({ city }: FavoriteButtonProps) {
  const { isCityFavorite, handlePress } = useFavoriteButtonController(city);

  return (
    <ButtonContainer onPress={handlePress}>
      <Feather 
        name="star"
        size={24} 
        color={isCityFavorite ? "#FFC72B" : "#A3A3A3"} 
      />
    </ButtonContainer>
  );
} 