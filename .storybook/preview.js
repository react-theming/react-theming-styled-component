import { ThemeProvider } from "styled-components";
import { freeTheme, oneTheme } from "./theme";
import { withThemes } from "@react-theming/storybook-addon/dist/preview";
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Testing is decorators",
    defaultValue: "freeTheme",
    toolbar: {
      items: ["freeTheme", "oneTheme"],
      showName: true
    }
  }
};

const getTheme = themeName => {
  console.log("themeName", themeName);
  switch (themeName) {
    case "oneTheme": {
      return oneTheme;
    }
    case "freeTheme": {
      return freeTheme;
    }
    default: {
      return freeTheme;
    }
  }
};

const withThemeProvider = (Story, context) => {
  console.log("context", context.globals);
  const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

const decorators = [
  Story => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  )
];

// const decorators = [withThemes(ThemeProvider, [freeTheme, oneTheme])];

export const decorators = [withThemeProvider];
