// src/Theme.js
import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Theme = createContext();

export const useTheme = () => useContext(Theme);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () => createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Theme.Provider value={{ mode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </Theme.Provider>
  );
};

export default Theme;
