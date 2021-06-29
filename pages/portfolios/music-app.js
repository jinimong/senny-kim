import Head from 'next/head';
import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Dots from '../../components/atoms/Dots';
import Footer from '../../components/atoms/Footer';
import Navigation from '../../components/atoms/Navigation';
import Tag from '../../components/atoms/Tag';
import Titles from '../../components/atoms/Titles';
import AboutLangsup from '../../components/molecules/langsup/AboutLangsup';
import Branding from '../../components/molecules/langsup/Branding';
import DesignSystem from '../../components/molecules/langsup/DesignSystem';
import Screens from '../../components/molecules/langsup/Screens';
import ServiceStrategy from '../../components/molecules/langsup/ServiceStrategy';
import Description from '../../components/molecules/music-app/Description';
import Poster from '../../components/molecules/music-app/Poster';
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
  background-color: var(--charcoal);
  width: 100vw;
  height: 100vh;
  position: relative;
  text-align: center;
  color: var(--white);

  .icons {
    width: 70%;
    height: 60%;
    position: relative;

    span {
      position: absolute;
    }
  }

  iframe {
    width: 100vw;
    height: calc(100vw / 1.77);
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
  padding-bottom: 5rem;
  color: var(--charcoal);

  h3 {
    padding-top: 8rem;
    margin-bottom: 5.25rem;
    text-align: center;
    font-weight: 900;
    font-size: 1.875rem;
    line-height: 2rem;
  }
`;

export default function LangsUp() {
  const [offsetY, setOffsetY] = useState(0);
  const [clientHeight, setClientHeight] = useState(1);
  const halfClientHeight = clientHeight / 2;

  useEffect(() => {
    setClientHeight(document.documentElement.clientHeight);
  }, []);

  const onScroll = useCallback((e) => {
    setOffsetY(e.target.scrollTop);
  }, []);

  return (
    <Container onScroll={onScroll}>
      <Head>
        <title>music app</title>
      </Head>
      <Navigation
        color={offsetY < clientHeight ? 'var(--white)' : 'var(--charcoal)'}
      />
      <MainContainer className="snap">
        <Titles
          style={{
            opacity: (halfClientHeight - offsetY) / halfClientHeight,
          }}
        >
          <SubTitle>Marketing & Concerts</SubTitle>
        </Titles>
        <Tag
          color={
            offsetY < halfClientHeight ? 'var(--white)' : 'var(--charcoal)'
          }
        >
          <a
            href="https://www.youtube.com/channel/UCWlyjCeMSyt-2exNJ-D1XTA/videos"
            target="_blank"
          >
            View More
          </a>
        </Tag>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/WCMXYogyN7I?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </MainContainer>
      <DetailContainer className="snap">
        <Description />
        <Poster
          title="Far East Movement, HYUKOH and Taeyeon @ Vancouver 2017 SEP"
          imageSrc="/assets/albatross.png"
          videoCode="Xvd4aw6GR58"
        />
        <Poster
          title="Just Music @ Vancouver & Toronto 2017 NOV"
          imageSrc="/assets/weeffect.png"
          videoCode="WCMXYogyN7I"
        />
        <Poster
          title="REDDY & G2 @ Vancouver & Toronto 2017 JUL"
          imageSrc="/assets/hilite.png"
          videoCode="xe-rhmpXlc8"
        />
        <Footer backgroundColor="var(--charcoal)" color="var(--white)" />
      </DetailContainer>
    </Container>
  );
}
