'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useThemeColor() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return {
      color: 'rgb(var(--muted-foreground))',
      activeColor: 'rgb(var(--primary))'
    };
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  return {
    color: currentTheme === 'dark' ? '#FFFFFF' : 'rgb(var(--muted-foreground))',
    activeColor: currentTheme === 'dark' ? '#FFFFFF' : 'rgb(var(--primary))'
  };
}