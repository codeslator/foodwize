import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { defaultTheme } from './assets/themes/index';
import { store } from './store';
import { Router } from './config/router/router';

const App = () => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <Router />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
