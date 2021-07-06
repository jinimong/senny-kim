import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Footer from '../../components/atoms/Footer';
import Navigation from '../../components/atoms/Navigation';
import Titles from '../../components/atoms/Titles';
import { useScrollContext } from '../../components/contexts/ScrollContextProvider';
import { flexCenterStyle, hiddenScrollStyle } from '../../styles/common';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  background-color: var(--charcoal);
  color: var(--lightgreen);
  ${hiddenScrollStyle}
`;

const SubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: normal;
`;

const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  ${flexCenterStyle}
  flex-direction: column;
  position: relative;
  text-align: center;
`;

const MusicApp = () => {
  const { clientHeight } = useScrollContext();
  return (
    <Container>
      <Head>
        <title>music app</title>
      </Head>
      <Navigation />
      <MainContainer>
        <Titles>
          <SubTitle>Concept Design</SubTitle>
        </Titles>
        <div className="h-full flex flex-col items-center justify-end pb-4">
          <video loop autoPlay width={(clientHeight * 0.75) / 2.167}>
            <source src="/assets/music_app.mp4" type="video/mp4" />
          </video>
        </div>
      </MainContainer>
      <div className="h-16 relative">
        <Footer borderColor="var(--lightgreen)" />
      </div>
    </Container>
  );
};

export default MusicApp;
