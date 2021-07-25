import styled from 'styled-components';
import { flexCenterStyle } from '../../styles/common';

const Tag = styled.div`
  ${flexCenterStyle}
  color: ${({ color }) => color};
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid ${({ borderColor = '#c7cdff' }) => borderColor};
  font-size: 1rem;
  letter-spacing: 0.165em;
  width: 10rem;
  height: 3.5rem;
  left: -3.5rem;
  position: fixed;
  transform: rotate(-90deg);
  z-index: 2;
  cursor: pointer;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export default Tag;
