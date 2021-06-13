import Image from 'next/image';
import styled, { css } from 'styled-components';

const flexCenterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  ${flexCenterStyle}
  flex-direction: column;
  background-color: var(--blue);
  width: 100vw;
  height: 100vh;
  position: relative;
  text-align: center;
  color: var(--white);
`;

const Titles = styled.div`
  ${flexCenterStyle}
  flex-direction: column;
  position: fixed;
  top: 15%;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 300;
`;

const SubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: normal;
`;

const Tag = styled.div`
  ${flexCenterStyle}
  color: var(--white);
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #c7cdff;
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

const Navigation = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  position: fixed;
  top: 10%;
  left: 118px;

  .name {
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: normal;
  }
`;

const Dots = styled.div`
  background-image: url('/assets/dots.png');
  background-repeat: no-repeat;
  background-position: left bottom;
  width: 100%;
  height: 100%;
  position: fixed;
`;

export default function LangsUp() {
  return (
    <MainContainer>
      <Navigation>
        <div>
          <Image src="/assets/logo.png" width={32} height={32} alt="logo" />
        </div>
        <div className="name">
          <span>KIM</span>
          <span>SEHYUN</span>
        </div>
      </Navigation>
      <Titles>
        <SubTitle>Product Design</SubTitle>
        <Title style={{ marginTop: '2rem' }}>
          Languages Speak Up,{' '}
          <span style={{ fontWeight: '900' }}>langsup!</span>
        </Title>
        <SubTitle style={{ marginTop: '1rem' }}>
          1:1 Video English Study Platform
        </SubTitle>
      </Titles>
      <Tag>
        <a href="https://langsup.io" target="_blank">
          langsup.io
        </a>
      </Tag>
      <Dots style={{ backgroundPosition: 'left bottom' }} />
      <Dots style={{ backgroundPosition: 'right center' }} />
    </MainContainer>
  );
}
