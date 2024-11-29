import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { useFavorites } from '../../contexts/favorites-context';

interface FavoriteButtonProps {
  city: string;
}

export function FavoriteButton({ city }: FavoriteButtonProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const isCityFavorite = isFavorite(city);

  const handlePress = async () => {
    if (isCityFavorite) {
      await removeFavorite(city);
    } else {
      await addFavorite(city);
    }
  };

  return (
    <ButtonContainer onPress={handlePress}>
      <Feather 
        name={isCityFavorite ? "star" : "star"} 
        size={24} 
        color={isCityFavorite ? "#FFC72B" : "#A3A3A3"} 
      />
    </ButtonContainer>
  );
}

const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md}px;
  top: ${({ theme }) => theme.spacing.md}px;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
`; 