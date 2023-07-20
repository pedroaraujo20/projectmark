import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 21px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 42px 249px 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    color: ${theme.colors["gray-800"]};
    font-weight: ${theme.fontWeights.bold};
  `}
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
