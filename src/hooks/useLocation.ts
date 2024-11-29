import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

interface UseLocationResult {
  location: string | null;
  error: string | null;
  isLoading: boolean;
  showPermissionModal: boolean;
  requestLocation: () => Promise<void>;
  handlePermissionResponse: (allowed: boolean) => Promise<void>;
}

const DEFAULT_CITY = 'São Paulo,SP';

export function useLocation(): UseLocationResult {
  const [location, setLocation] = useState<string | null>(DEFAULT_CITY);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(false);

  const requestLocation = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const { status } = await Location.getForegroundPermissionsAsync();
      
      if (status === 'undetermined') {
        setShowPermissionModal(true);
        setIsLoading(false);
        return;
      }
      
      if (status !== 'granted') {
        setLocation(DEFAULT_CITY);
        setIsLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      
      if (location) {
        const coords = `${location.coords.latitude},${location.coords.longitude}`;
        setLocation(coords);
      } else {
        setLocation(DEFAULT_CITY);
      }
    } catch (err) {
      console.error('Location error:', err);
      setLocation(DEFAULT_CITY);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePermissionResponse = async (allowed: boolean) => {
    setShowPermissionModal(false);
    
    if (allowed) {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          await requestLocation();
        } else {
          setLocation(DEFAULT_CITY);
        }
      } catch (err) {
        console.error('Permission error:', err);
        setLocation(DEFAULT_CITY);
      }
    } else {
      setLocation(DEFAULT_CITY);
    }
  };

  useEffect(() => {
    requestLocation();
  }, []);

  return {
    location,
    error,
    isLoading,
    showPermissionModal,
    requestLocation,
    handlePermissionResponse,
  };
} 