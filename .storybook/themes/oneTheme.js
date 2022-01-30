import { ThemeProvider } from "styled-components";

const oneTheme = {
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
    whiteTransparent: "rgba(255, 255, 255, 0.5)",
    blackTransparent: "#fcfcfc",
    accent1: "#3bd9d6",
    accent2: "#0a8997",
    accent3: "#292b2c",
    accent4: "#7c0435",
    accent5: "#ac924d",
    accent6: "#e0a8b4",
    accent7: "#6cb09e",
    accent8: "#8b8b6b",
    accent9: "#1f595f"
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

export const Theme = ({ children }) => <ThemeProvider theme={oneTheme}>{children}</ThemeProvider>;
