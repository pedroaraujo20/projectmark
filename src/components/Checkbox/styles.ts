import styled, { css } from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckboxContainer = styled(Checkbox.Root)`
  width: 17.5px;
  height: 17.5px;
  border-radius: 5.25px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0;
  outline: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${({ theme }) => css`
    border: 2px solid ${theme.colors["gray-400"]};
    background-color: ${theme.colors.white};

    &[data-state="checked"] {
      background-color: ${theme.colors.blueHighlight};
    }

    &:focus,
    &:hover,
    &[data-state="checked"] {
      border: 2px solid ${theme.colors.blueHighlight};
      box-shadow: none;
    }
  `}
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${({ theme }) => theme.colors.white};
  width: 8px;
  height: 8px;
`;
