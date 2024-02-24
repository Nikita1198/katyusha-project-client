import { createTheme } from "@mui/material/styles";
import { green, grey, red } from "@mui/material/colors";
import { ruRU } from "@mui/material/locale";

export const lightTheme = createTheme(
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
      fontFamily: "'Work Sans', Comfortaa, sans-serif",
      fontSize: 14,
      fontWeightLight: 300, // Work Sans
      fontWeightRegular: 400, // Work Sans
      fontWeightMedium: 700, // Roboto Condensed
    },
  },
  ruRU
);

export const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark', 
      primary: {
        light: "#6abf69",
        main: "#388e3c",
        dark: "#00600f",
      },
      secondary: {
        light: "#ffbd45",
        main: "#fb8c00",
        dark: "#c25e00",
      },
      warning: {
        main: "#ffa726",
        dark: "#f57c00",
      },
      error: {
        light: red[300],
        main: red[700],
        dark: red[900],
      },
      success: {
        light: green[300],
        main: green[700],
        dark: green[900],
      },
      background: {
        default: grey[900],
        paper: grey[800],
      },
      text: {
        primary: grey[50],
        secondary: grey[300],
      },
    },
    typography: {
      fontFamily: "'Work Sans', Comfortaa, sans-serif",
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 700,
    },
  },
  ruRU
);

export default {lightTheme, darkTheme };