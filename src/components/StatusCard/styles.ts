import styled, { css } from "styled-components";

export type Colors = "gray" | "purple" | "orange" | "blue" | "cyan" | "pink";

interface ColorProps {
  color: Colors;
}

export const Container = styled.div<ColorProps>`
  border-radius: 14px;
  width: 222px;
  height: 558px;

  ${({ theme, color }) => css`
    background-color: ${theme.colors[`${color}-100`]};
  `};
`;

export const Header = styled.header<ColorProps>`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 14px;

  span {
    text-transform: uppercase;

    ${({ theme, color }) => css`
      font-size: ${theme.fontSizes.md};
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors[`${color}-700`]};
    `}
  }
`;

export const Progress = styled.div<ColorProps>`
  width: 114px;
  border-radius: 10.5px;
  height: 22px;

  ${({ theme, color }) => css`
    background-color: ${theme.colors[`${color}-200`]};

    div {
      background-color: ${theme.colors[`${color}-300`]};
      width: 42px;
      border-radius: 10.5px;
      height: 22px;
    }
  `}
`;

export const Card = styled.div<ColorProps>`
  width: 211px;
  height: 175px;
  flex-shrink: 0;

  margin: 9px 5px;

  ${({ theme, color }) => css`
    border-radius: 10.5px;
    border: 1px solid ${theme.colors[`${color}-200`]};
  `}
`;
