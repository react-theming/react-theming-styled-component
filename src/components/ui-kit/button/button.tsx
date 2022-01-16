import React, { FC } from "react";
import { StyledButtonWrapper } from "./button.styles";

export type PropsButton = {
  onClick?: () => void;
  theme?: "transparent" | "blue" | "white";
};

export const Button: FC<PropsButton> = ({ onClick, theme, children }) => {
  return (
    <>
      <StyledButtonWrapper theme={theme} onClick={onClick} type="button">
        {children}
      </StyledButtonWrapper>
    </>
  );
};
