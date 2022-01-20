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
  transitions: {
    easing: {
      easeOut: "cubic-bezier(.8, 1.5, 0, 1)",
      sharp: "linear"
    }
  }
});

export default theme;