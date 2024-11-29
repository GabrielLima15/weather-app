import 'react-native-gesture-handler';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './src/theme/theme-provider';
import { Navigation } from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LanguageProvider } from './src/contexts/language-context';
import { FavoritesProvider } from './src/contexts/favorites-context';
import { NotificationsProvider } from './src/contexts/notifications-context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FavoritesProvider>
            <NotificationsProvider>
              <ThemeProvider>
                <Navigation />
              </ThemeProvider>
            </NotificationsProvider>
          </FavoritesProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
