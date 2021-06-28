import styled, { css } from 'styled-components';
import { flexCenterStyle } from '../../styles/common';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 4rem;
  bottom: 0;
  font-size: 14px;
  line-height: 22px;
  ${flexCenterStyle}

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
	${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
		${({ borderColor }) =>
    borderColor &&
    css`
      border-top: 1px solid ${borderColor};
    `}
`;

const Footer = ({ backgroundColor, color, borderColor }) => (
  <Container
    backgroundColor={backgroundColor}
    color={color}
    borderColor={borderColor}
  >
    copyrightⓒ {new Date().getFullYear()} All rights reserved by Sehyun Kim
  </Container>
);

export default Footer;
