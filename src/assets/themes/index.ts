import { createTheme } from '@mui/material';
import { Montserrat } from './fonts';
import { defaultPalette } from './defaultPalette';

declare module '@mui/material/styles/createPalette' {
  type Greys = {
    '100': string;
    '90': string;
    '80': string;
    '70': string;
    '60': string;
    '50': string;
    '40': string;
    '30': string;
    '20': string;
    '10': string;
    '0': string;
  };
  interface Palette {
    greys: Greys;
  }
  interface PaletteOptions {
    greys: Greys;
  }
}
export const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  palette: {
    mode: 'light',
    ...defaultPalette,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [Montserrat],
      },
    },
  },
});
