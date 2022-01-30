import React, { FC } from "react";
import { StyledButtonWrapper } from "./button.styles";

export type PropsButton = {
  onClick?: () => void;
};

export const Button: FC<PropsButton> = ({ onClick, children }) => {
  return (
    <>
      <StyledButtonWrapper onClick={onClick} type="button">
        {children}
      </StyledButtonWrapper>
    </>
  );
};
