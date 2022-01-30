import styled from "styled-components";

export const StyledButtonWrapper = styled.button`
  padding: 16px 22px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.accent2};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.accent1};
  border-radius: 10px;
`;
