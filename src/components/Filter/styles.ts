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

    &:hover {
      border: 2px solid ${theme.colors.blueHighlight};
    }

    ${isActive && `border: 2px solid ${theme.colors.blueHighlight};`}
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
