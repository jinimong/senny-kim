import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Dots from '../../components/atoms/Dots';
import Footer from '../../components/atoms/Footer';
import Navigation from '../../components/atoms/Navigation';
import Tag from '../../components/atoms/Tag';
import Titles from '../../components/atoms/Titles';
import { useScrollContext } from '../../components/contexts/ScrollContextProvider';
import AboutLangsup from '../../components/molecules/langsup/AboutLangsup';
import Branding from '../../components/molecules/langsup/Branding';
import DesignSystem from '../../components/molecules/langsup/DesignSystem';
import Screens from '../../components/molecules/langsup/Screens';
import ServiceStrategy from '../../components/molecules/langsup/ServiceStrategy';
import { flexCenterStyle, hiddenScrollStyle } from '../../styles/common';

const Container = styled.div`
  scroll-snap-type: y proximity;
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  ${hiddenScrollStyle}

  & > .snap {
    scroll-snap-align: start;
  }
`;

const MainContainer = styled.section`
  ${flexCenterStyle}
  flex-direction: column;
  background-color: var(--blue);
  width: 100vw;
  height: 100vh;
  position: relative;
  text-align: center;
  color: var(--white);
  overflow-y: hidden;

  .icons {
    width: 70%;
    height: 60%;
    position: relative;

    span {
      position: absolute;
    }
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 300;
`;

const SubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: normal;
`;

const DetailContainer = styled.section`
  width: 100vw;
  display: block;
  overflow-y: auto;
  position: relative;
  background: #fff;

  h3 {
    padding-top: 16rem;
    margin-bottom: 5.25rem;
    text-align: center;
    font-weight: 900;
    font-size: 1.875rem;
    line-height: 2rem;
    color: var(--blue);
  }
`;

export default function LangsUp() {
  const { offsetY, clientHeight, onScroll } = useScrollContext();
  const halfClientHeight = clientHeight / 2;

  return (
    <Container onScroll={onScroll}>
      <Head>
        <title>langsup</title>
      </Head>
      <Navigation
        color={offsetY < clientHeight ? 'var(--white)' : 'var(--navy)'}
      />
      <MainContainer className="snap">
        <Titles
          style={{
            opacity: (halfClientHeight - offsetY) / halfClientHeight,
          }}
        >
          <SubTitle>Product Design</SubTitle>
          <Title style={{ marginTop: '2rem' }}>
            Languages Speak Up,{' '}
            <span style={{ fontWeight: '900' }}>langsup!</span>
          </Title>
          <SubTitle style={{ marginTop: '1rem' }}>
            1:1 Video English Study Platform
          </SubTitle>
        </Titles>
        <Tag
          color={offsetY < halfClientHeight ? 'var(--white)' : 'var(--blue)'}
        >
          <a href="https://langsup.io" target="_blank">
            langsup.io
          </a>
        </Tag>
        <Dots style={{ backgroundPosition: `left bottom` }} />
        <Dots style={{ backgroundPosition: `right center` }} />
        <div
          className="absolute top-1/3 h-full flex justify-between items-center ml-60 animate-fade-in z-10"
          style={{
            opacity: 1 - offsetY / clientHeight,
            width: '54rem',
            height: '45rem',
          }}
        >
          <div className="relative w-72 h-full translate-y-48">
            <Image
              src="/assets/message-2.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-72 h-full -translate-y-4">
            <Image
              src="/assets/signup-1.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-72 h-full -translate-y-56">
            <Image
              src="/assets/tutor-search.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="absolute w-72 h-full top-80 right-0">
            <div className="relative w-full h-full">
              <Image
                src="/assets/signup-2.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="icons">
          <span style={{ top: '25%', left: '0' }}>💬</span>
          <span style={{ top: '0', right: '16%' }}>🗯</span>
          <span style={{ top: '80%', left: '15%' }}>😙</span>
          <span style={{ top: '60%', right: '0' }}>😄</span>
          <span style={{ bottom: '0', right: '10%' }}>💻</span>
        </div>
      </MainContainer>
      <DetailContainer className="snap">
        <DesignSystem />
        <AboutLangsup />
        <ServiceStrategy />
        <Branding />
        <Screens />
        <Footer backgroundColor="var(--blue)" color="var(--white)" />
      </DetailContainer>
    </Container>
  );
}
