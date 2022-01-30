import "styled-components";
import { ThemeEnum, ThemeTypes } from "./themes/types";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeTypes {
    type: ThemeEnum;
  }
}
