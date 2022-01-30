export interface ThemeTypes {
  name: string;
  palette: {
    primary: CustomThemeTypes;
    secondary: CustomThemeTypes;
  };
  colors: ColorsType;
  fontSizes: FontSizeTypes;
}

type ColorsType = Record<"white" | "accent1" | "accent2", string>;

type CustomThemeTypes = Record<"light" | "main" | "dark" | "contrastText", string>;

type FontSizeTypes = Record<"small" | "medium" | "large", string>;

export enum ThemeEnum {
  one = "one",
  free = "free"
}
