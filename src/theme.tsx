import React, { createContext, useState, useContext } from 'react';

interface ThemeSettings {
  darkModeEnabled: boolean;
  switchTheme: () => void;
}

const ThemeContext = createContext<ThemeSettings | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const switchTheme = () => setDarkModeEnabled((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ darkModeEnabled, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeSettings = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeSettings must be used within a ThemeProvider');
  }
  return context;
};
