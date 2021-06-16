import Head from 'next/head';
import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Dots from '../../components/atoms/Dots';
import Navigation from '../../components/atoms/Navigation';
import Tag from '../../components/atoms/Tag';
import { flexCenterStyle } from '../../styles/common';

const Container = styled.div`
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

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

const DetailContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
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
        <title>langsup</title>
      </Head>
      <MainContainer className="snap">
        <Navigation
          color={offsetY < clientHeight ? 'var(--white)' : 'var(--navy)'}
        />
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
      </MainContainer>
      <DetailContainer className="snap" />
    </Container>
  );
}
