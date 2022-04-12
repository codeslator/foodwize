import { useState } from 'react';
import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { defaultTheme } from './assets/themes/index';
import AppLayout from './containers/layouts/AppLayout';

const App = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
