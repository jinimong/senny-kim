import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Footer from '../../components/atoms/Footer';
import Navigation from '../../components/atoms/Navigation';
import Tag from '../../components/atoms/Tag';
import Titles from '../../components/atoms/Titles';
import { useScrollContext } from '../../components/contexts/ScrollContextProvider';
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
  background-color: black;
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
  padding-bottom: 10rem;
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

export default function Concerts() {
  const { offsetY, clientHeight, onScroll } = useScrollContext();
  const halfClientHeight = clientHeight / 2;

  return (
    <Container onScroll={onScroll}>
      <Head>
        <title>concerts</title>
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
        <div className="w-full h-full flex items-center justify-center">
          <video loop autoPlay width={clientHeight * 1.77}>
            <source src="/assets/concerts.mp4" type="video/mp4" />
          </video>
        </div>
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
        >
          <div className="mt-6 w-full h-60 flex items-center">
            <div className="relative w-1/2 h-full">
              <Image
                src="/assets/weeffect2.png"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <div className="whitespace-pre-wrap w-1/2 px-6">
              Just Music “We Effect” with BILL STAX, Swings, Black Nut,
              Goretexx, GIRIBOY, C Jamm, Osshun Gum, Genius Nochang, Hanyohan.
              {'\n\n'}
              Vancouver Concert : November 22nd, 2017 @ Vogue Theatre
              {'\n'}
              Toronto Concert : November 20th, 2017 @ The Opera House
            </div>
          </div>
        </Poster>
        <Poster
          title="REDDY & G2 @ Vancouver & Toronto 2017 JUL"
          imageSrc="/assets/hilite.png"
          videoCode="xe-rhmpXlc8"
        >
          <div className="mt-6 whitespace-pre-wrap w-full">
            REDDY and G2 of "Show Me the Money 5" and "Hip Hop Nation 2".
            {'\n'}
            Universe & G2's Life Tour 2017 is hosted by CBM, ASTRO
            Entertainment, and Legendary Promotion.
            {'\n'}
            "UNIVERSE & G2's LIFE TOUR 2017" toured Vancouver, Toronto, Los
            Angeles, and San Francisco starting June 30th, 2017.
            {'\n\n'}
            Vancouver Concert : July 1st, 2017 @ Privé Nightclub
            {'\n'}
            Toronto Concert : July 6th, 2017 @ Lee’s Palace
          </div>
        </Poster>
        <Poster
          title="BewhY @ Vancouver & Toronto 2016 JAN"
          imageSrc="/assets/bewhy.png"
          videoCode="CWROBxtbiyM"
        >
          <div className="mt-6 w-full h-60 flex items-center space-x-0">
            <div className="relative w-1/4 h-full">
              <Image
                src="/assets/bewhy2.png"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <div className="relative w-1/4 h-full">
              <Image
                src="/assets/bewhy3.png"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <div className="whitespace-pre-wrap w-1/2 px-6">
              The winner of “Show Me the Money 5”.
              {'\n'}
              The hottest rapper who is in the center of Korean hip-hop scene.
              {'\n'}
              BewhY’s first Canada Tour in Vancouver and Toronto.
              {'\n\n'}
              Vancouver Concert : January 21st, 2016 @ Vogue Theatre
              {'\n'}
              Toronto Concert : January 27th, 2016 @ Danforth Music Hall
            </div>
          </div>
        </Poster>
        <Poster
          title="DJ DOC @ Vancouver 2017 MAR"
          imageSrc="/assets/djdoc.png"
          videoCode="4g3PDblt-IE"
        >
          <div className="mt-6 w-full h-60 flex items-center space-x-0">
            <div className="relative w-1/4 h-full">
              <Image
                src="/assets/djdoc2.png"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <div className="whitespace-pre-wrap w-1/2 px-6">
              DJ DOC, the famous Korean Hip Hop group with their “A Spring Field
              Day Concert !”
              {'\n'}
              The DJ DOC concert is widely loved by concert goers.
              {'\n\n'}
              Vancouver Concert : March 3rd @ Vogue Theatre
            </div>
          </div>
        </Poster>
        <Footer backgroundColor="var(--charcoal)" color="var(--white)" />
      </DetailContainer>
    </Container>
  );
}
