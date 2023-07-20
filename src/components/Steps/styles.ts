import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 42px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div<{ isActive?: boolean }>`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 17.5px;

  ${({ theme, isActive }) => css`
    background-color: ${isActive
      ? theme.colors["gray-800"]
      : theme.colors.white};

    border: 1px solid
      ${isActive ? theme.colors["gray-800"] : theme.colors["gray-500"]};

    span {
      font-size: ${theme.fontSizes.l};
      font-weight: ${theme.fontWeights.regular};
      color: ${isActive ? theme.colors.white : theme.colors["blue-800"]};
    }
  `}
`;

export const Description = styled.span`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors["gray-800"]};
  `}
`;
