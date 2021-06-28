import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Footer from '../../components/atoms/Footer';
import Navigation from '../../components/atoms/Navigation';
import Titles from '../../components/atoms/Titles';
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

const Concerts = () => (
  <Container>
    <Head>
      <title>concerts</title>
    </Head>
    <Navigation />
    <MainContainer>
      <Titles>
        <SubTitle>Concept Design</SubTitle>
      </Titles>
    </MainContainer>
    <Footer borderColor="var(--lightgreen)" />
  </Container>
);

export default Concerts;
