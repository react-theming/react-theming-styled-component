import {ThemeProvider} from "styled-components";


const TwoTheme  = {
    name: "Two Theme",
    palette: {
        primary: {
            light: "#838c8b",
            main: "#5c0b8c",
            dark: "#dada0d",
            contrastText: '#ce3030'
        },
        secondary: {
            light: "#2fccda",
            main: "#94942f",
            dark: "#673333",
            contrastText: '#675757'
        }
    },
    colors: {
        white: "red",
        whiteTransparent: "rgba(28,122,178,0.5)",
        blackTransparent: "#a47979",
        accent1: "#3f5957",
        accent2: "#2a6c73",
        accent3: "#74ad26",
        accent4: "#d90808",
        accent5: "#e3ae1f",
        accent6: "#64202d",
        accent7: "#6cb09e",
        accent8: "#b6b623",
        accent9: "#44b6c0",
    },
    fontSizes: {
        small: "1rem",
        medium: "2rem",
        large: "3rem"
    }
}


export const Theme = ({ children }) => (
    <ThemeProvider theme={TwoTheme}>{ children }</ThemeProvider>
);