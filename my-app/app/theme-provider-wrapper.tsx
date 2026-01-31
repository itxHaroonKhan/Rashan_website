'use client';

import React from 'react';
import { ThemeProvider } from '../lib/theme-context';

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;