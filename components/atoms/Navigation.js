import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  top: 10%;
  left: 118px;
  z-index: 2;

  .name {
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.1em;
    white-space: pre-wrap;
    text-align: left;
    color: ${({ color }) => color};
  }
`;

const Navigation = ({ color }) => (
  <Container color={color}>
    <Image src="/assets/logo.png" width={32} height={32} alt="logo" />
    <div className="name">{`KIM\nSEHYUN`}</div>
  </Container>
);

export default Navigation;
