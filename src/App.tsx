import 'react-perfect-scrollbar/dist/css/styles.css';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { defaultTheme } from './assets/themes/index';
import { store } from './store';
import { Router } from './config/router/router';

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <SnackbarProvider autoHideDuration={3000} maxSnack={3}>
            <CssBaseline />
            <Router />
          </SnackbarProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
