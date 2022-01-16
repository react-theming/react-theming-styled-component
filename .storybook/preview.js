import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";

import { theme } from "./theme";
import { withThemes } from "@react-theming/storybook-addon/dist/preview";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

// addDecorator((ThemeProvider, [theme]));

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
];
