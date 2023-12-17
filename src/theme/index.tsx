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

export const ThemeContext = createContext<{themeName:string,toggleTheme:VoidFunction}>({
  themeName:"light",
  toggleTheme: ()=>{}
});

export default function ThemeProvider({ children }: ProviderPropsT) {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (themeName === 'light') {
      setThemeName('dark');
      // otherwise, it should be light
    } else {
      setThemeName('light');
    }
  }

  const themeobj = {
    themeName,
    toggleTheme
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
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <ThemeContext.Provider value={themeobj}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
    </NextAppDirEmotionCacheProvider >
  );
}
