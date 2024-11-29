import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, TouchableContent, CityInfo, CityName, RemoveButton } from './styled';
import { useFavoriteItemController } from './controller';

interface FavoriteItemProps {
  city: string;
}

export function FavoriteItem({ city }: FavoriteItemProps) {
  const { handlePress, handleRemove } = useFavoriteItemController(city);

  return (
    <Container>
      <TouchableContent onPress={handlePress}>
        <CityInfo>
          <Feather name="map-pin" size={20} color="white" />
          <CityName>{city}</CityName>
        </CityInfo>
        <RemoveButton onPress={handleRemove}>
          <Feather name="trash-2" size={20} color="#FF4842" />
        </RemoveButton>
      </TouchableContent>
    </Container>
  );
} 