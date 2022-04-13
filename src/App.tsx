import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { defaultTheme } from './assets/themes/index';
// import AppLayout from './containers/layouts/AppLayout';
import { store } from './store';
import { Router } from './config/router/Router';

const App = () => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
