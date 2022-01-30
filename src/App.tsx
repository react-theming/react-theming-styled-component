import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Main } from "./page/main";
import { Button } from "./components/ui-kit/button/button";
import { oneTheme } from "./themes/oneTheme";
import { freeTheme } from "./themes/freeTheme";

export const App = () => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = theme ? freeTheme : oneTheme;

  return (
    <>
      <ThemeProvider theme={toggleTheme}>
        <Button onClick={() => setTheme(!theme)}>Сменить тему</Button>
        <Main />
      </ThemeProvider>
    </>
  );
};
