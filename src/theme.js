import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffcc33',
    },
    secondary: {
      main: '#333333',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;