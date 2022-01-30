import { DefaultTheme } from "styled-components";
import { ThemeEnum } from "./types";

export const oneTheme: DefaultTheme = {
  type: ThemeEnum.one,
  name: "One Theme",
  palette: {
    primary: {
      light: "#3bd9d6",
      main: "#0a8997",
      dark: "#292b2c",
      contrastText: "#fff"
    },
    secondary: {
      light: "#0d191a",
      main: "#cbcb35",
      dark: "#882323",
      contrastText: "#fff"
    }
  },
  colors: {
    white: "#4b00dc",
    accent1: "#3bd9d6",
    accent2: "#0a8997"
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};
