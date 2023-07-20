import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.button`
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 34px;

  padding: 13px 21px;

  border: 0;
  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.colors.blueHighlight};

    span {
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes.md};
      font-weight: ${theme.fontWeights.bold};
    }
  `}
`;
