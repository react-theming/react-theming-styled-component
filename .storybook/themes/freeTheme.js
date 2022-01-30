import {ThemeProvider} from "styled-components";

const freeTheme  = {
    name: "Free Theme",
    palette: {
        primary: {
            light: "#2e7575",
            main: "#0f970a",
            dark: "#2c292c",
            contrastText: '#6e3131'
        },
        secondary: {
            light: "#4a8085",
            main: "#8a8a3d",
            dark: "#5b2222",
            contrastText: '#705252'
        }
    },
    colors: {
        white: "#360e81",
        whiteTransparent: "rgba(73,49,49,0.5)",
        blackTransparent: "#b20404",
        accent1: "#445b5a",
        accent2: "#d30505",
        accent3: "#5e91ab",
        accent4: "#35ff02",
        accent5: "#f1b617",
        accent6: "#851c33",
        accent7: "#050505",
        accent8: "#b6b63e",
        accent9: "#2f6369",
    },
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}


export const Theme = ({children}) => (
    <ThemeProvider theme={freeTheme}>{children}</ThemeProvider>
);