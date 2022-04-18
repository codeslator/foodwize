import { createTheme } from "@mui/material";
import { Montserrat } from './fonts';
import { defaultPalette } from './defaultPalette';

export const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
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