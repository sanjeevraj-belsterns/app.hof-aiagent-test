'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { Work_Sans } from 'next/font/google';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

interface CustomThemeOptions extends ThemeOptions {
  cssVariables?: boolean;
}

const work_sans = Work_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

const themeOptions: CustomThemeOptions = {
  cssVariables: true,
  typography: {
    fontFamily: `${work_sans}`
  }
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
