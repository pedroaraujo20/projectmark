import styled, { css } from "styled-components";

export const Container = styled.div<{ isActive?: boolean }>`
  position: relative;
  display: flex;
  height: 56px;
  min-width: 210px;
  border-radius: 10.5px;
  padding: 15px 14px;
  gap: 13.5px;
  align-items: center;
  cursor: pointer;

  ${({ theme, isActive }) => css`
    border: 2px solid ${theme.colors["gray-300"]};

    ${!isActive &&
    css`
      &:hover {
        background-color: ${theme.colors["gray-200"]};
      }
    `}

    ${isActive &&
    css`
      border: 2px solid ${theme.colors.blueHighlight};

      &::before {
        content: "";
        position: absolute;

        border: 1px solid ${theme.colors.blueHighlight};
        border-color: ${theme.colors.blueHighlight} transparent;
        border-width: 10px 12px 0;

        top: 100%;
        left: 50%;
      }

      &::after {
        content: "";
        position: absolute;

        border-color: ${theme.colors.white} transparent;
        border-style: solid;
        border-width: 10px 12px 0;

        bottom: -7px;
        left: 50%;
      }
    `}
  `}
`;

export const FilterName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors["gray-800"]};
  `}
`;
