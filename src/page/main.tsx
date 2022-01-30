import React, { FC } from "react";
import { Container } from "../components/ui-kit/container/container";
import { Button } from "../components/ui-kit/button/button";
import { StyledMainWrapper } from "./main.styled";

export const Main: FC = () => {
  return (
    <Container>
      <StyledMainWrapper>
        <Button onClick={() => console.log("click")}>Кнопка</Button>
      </StyledMainWrapper>
    </Container>
  );
};
