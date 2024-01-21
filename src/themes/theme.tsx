import { blue, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { green, grey, red } from "@mui/material/colors";
import { ruRU } from "@mui/material/locale";

export const appTheme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

export const rawTheme = createTheme(
  {
    palette: {
      primary: {
        light: "#94F3A7",
        main: "#007534",
        dark: "#007534",
      },
      secondary: {
        light: "#fffde6",
        main: "#db7638",
        dark: "#d16320",
      },
      warning: {
        main: "#ffc071",
        dark: "#ffb25e",
      },
      error: {
        light: red[50],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[50],
        main: green[500],
        dark: green[700],
      },
    },
    typography: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 14,
      fontWeightLight: 300, // Work Sans
      fontWeightRegular: 400, // Work Sans
      fontWeightMedium: 700, // Roboto Condensed
    },
  },
  ruRU
);
