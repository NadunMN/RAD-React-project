import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const DarkMode = () => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'light';
  });



  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const toggleTheme = () => {
    const newTheme = mode === 'light'? 'dark': 'light';
    localStorage.setItem('mode', newTheme);
    setMode(newTheme);
  };

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <ThemeProvider theme={theme} className='data-theme'>
      <CssBaseline />
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </ThemeProvider>
  );
};

export default DarkMode;
