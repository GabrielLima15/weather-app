import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { customTheme } from './custom-theme';
import { colors } from './colors';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const theme = {
  colors,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },
  backgrounds: {
    primary: colors.neutral[900],
    secondary: colors.neutral[800],
    tertiary: colors.neutral[700],
  },
  text: {
    primary: colors.neutral[100],
    secondary: colors.neutral[300],
    tertiary: colors.neutral[400],
  }
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...customTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ApplicationProvider>
  );
} 