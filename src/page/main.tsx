import React, { FC } from "react";
import { Container } from "../components/ui-kit/container/container";
import { Button } from "../components/ui-kit/button/button";
import { StyledMainWrapper } from "./main.styled";

export const Main: FC = () => {
  return (
    <StyledMainWrapper>
      <Container>
        <div>ПРивет</div>
        <Button theme="white" onClick={() => console.log("click")}>
          Кнопка
        </Button>
      </Container>
    </StyledMainWrapper>
  );
};
