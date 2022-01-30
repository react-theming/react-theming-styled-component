import { DefaultTheme } from "styled-components";
import { ThemeEnum } from "./types";

export const freeTheme: DefaultTheme = {
  type: ThemeEnum.free,
  name: "Free Theme",
  palette: {
    primary: {
      light: "#2e7575",
      main: "#0f970a",
      dark: "#2c292c",
      contrastText: "#6e3131"
    },
    secondary: {
      light: "#4a8085",
      main: "#8a8a3d",
      dark: "#5b2222",
      contrastText: "#705252"
    }
  },
  colors: {
    white: "#6e4caf",
    accent1: "#243abd",
    accent2: "rgba(145,44,44,0.5)"
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};
