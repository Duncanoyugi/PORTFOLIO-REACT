import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        // Update CSS variables for dark mode
        root.style.setProperty('--background', '222 47% 4%');
        root.style.setProperty('--foreground', '213 31% 91%');
        root.style.setProperty('--card', '222 47% 8%');
        root.style.setProperty('--primary', '250 65% 65%');
        root.style.setProperty('--primary-foreground', '213 31% 91%');
        root.style.setProperty('--border', '217 33% 20%');
      } else {
        root.classList.remove('dark');
        // Update CSS variables for light mode
        root.style.setProperty('--background', '210 40% 98%');
        root.style.setProperty('--foreground', '222 47% 11%');
        root.style.setProperty('--card', '0 0% 100%');
        root.style.setProperty('--primary', '250 47% 60%');
        root.style.setProperty('--primary-foreground', '210 40% 98%');
        root.style.setProperty('--border', '214 32% 91%');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Prevent flash by not rendering until theme is determined
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
