'use client';

import { createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material/styles';
import React, { createContext, useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './next-emotion-cache';
import { palette } from './palette';
import { typography } from './typography';
import merge from 'lodash/merge';
import { componentsOverrides } from './overrides';
import { viVN } from '@mui/material/locale';
import { useTheme } from '@mui/material/styles';
import { PaletteType } from "./palette"

export const changeTheme = (mode: 'light' | 'dark') => (
  {
    palette: palette(mode),
    typography,
    shape: { borderRadius: 8 },
    viVN
  }
)

type ProviderPropsT = {
  children: React.ReactNode;

};

export const ThemeContext = createContext<{ themeName: string, toggleTheme: VoidFunction, palette: PaletteType }>({
  themeName: "light",
  toggleTheme: () => { },
  palette: palette("light")
});

export default function ThemeProvider({ children }: ProviderPropsT) {
  const [themeName, setThemeName] = useState<"light" | "dark">(typeof window !== 'undefined' && localStorage.getItem("theme") as ("light" | "dark")|| "light");

  const toggleTheme = () => {
    
    // if the theme is not light, then set it to dark
    if (themeName === 'light') {
      setThemeName('dark');
      localStorage.setItem('theme', "dark");
      // otherwise, it should be light
    } else {
      setThemeName('light');
      localStorage.setItem('theme', "light");
    }
  }

  const themeobj = {
    themeName,
    toggleTheme,
    palette: palette(themeName)
  }

  const baseOption = useMemo(
    () => (
      {
        palette: palette(themeName),
        typography,
        shape: { borderRadius: 8 },
        viVN
      }
    ),
    [themeName]
  );

  const theme = createTheme(baseOption as ThemeOptions);
  theme.components = merge(componentsOverrides(theme));

  return (
    <ThemeContext.Provider value={themeobj}>
      <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>

        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>

      </NextAppDirEmotionCacheProvider >
    </ThemeContext.Provider>
  );
}
