import styled, { css } from "styled-components";

const themeButton = (options: { border: string; background: string }) => css`
  border: ${options.border};
  background: ${options.background};
`;

export const StyledButtonWrapper = styled.button`
  padding: 16px 22px;
  cursor: pointer;

  ${({ theme }) => theme && themeButton({ border: theme, background: theme })}
`;
