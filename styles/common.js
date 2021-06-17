import { css } from 'styled-components';

export const flexCenterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const hiddenScrollStyle = css`
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
