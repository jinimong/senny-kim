import Head from 'next/head';
import styled from 'styled-components';
import Navigation from '../components/atoms/Navigation';
import { flexCenterStyle, hiddenScrollStyle } from '../styles/common';

const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  ${flexCenterStyle}
`;

const Content = styled.div`
  width: auto;
  height: 70vh;
  text-align: left;
  margin: auto;
  white-space: pre-wrap;
  line-height: 1.5rem;
  overflow-y: auto;
  ${hiddenScrollStyle}
`;

const Section = styled.section`
  h2 {
    text-decoration: underline;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 3.375rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1rem;
    margin-top: 1.875rem;
  }

  ul {
    margin-top: 0.25rem;

    li {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.063rem;
      letter-spacing: 0em;
    }
  }
`;

export default function AboutMe() {
  return (
    <Container>
      <Head>
        <title>about me</title>
      </Head>
      <Navigation />
      <Content>
        <Section>
          Hello, It’s Sehyun.
          {'\n'}I am a UX/UI designer in Seoul.
        </Section>
        <Section>
          <h2>WORK EXPERIENCE</h2>
          <h3>
            IB the TOP / langsup (07/2020 - Present) Seoul, Korea
            {'\n'}
            UX/UI Designer
          </h3>
          <ul>
            <li>
              • Create wireframes, storyboards, user flows, process flows and
              site maps
            </li>
            <li>
              • Execute all visual design stages from concept to final hand-off
              to engineering
            </li>
            <li>• Creating and editing videos</li>
          </ul>
          <h3>
            AT&T (04/2019 - 04/2020) Vienna, Bratislava, Central Europe
            {'\n'}
            Shell Billing Dispute Manager
          </h3>
          <h3>
            Smart Media Star (04/2018 - 12/2018) Bratislava, Slovakia
            {`\n`}
            Web & Graphic Designer
          </h3>
          <ul>
            <li>• Designing advertisement for online and offline</li>
            <li>• Designing online banners and web pages</li>
            <li>• Creating and editing videos</li>
          </ul>
          <h3>
            CBM PRESS VANCOUVER (09/2016 - 11/2017) Vancouver, Canada
            {`\n`}
            Graphic Designer, Marketer and Promoter
          </h3>
          <ul>
            <li>• Designing weekly English magazine</li>
            <li>• Organizing and promoting concerts</li>
            <li>
              • Marketing on social networking service (Instagram, Facebook,
              Twitter etc.)
            </li>
          </ul>
        </Section>
        <Section>
          <h2>EDUCATION</h2>
          <h3>Sangmyung University (2010 - 2015) Cheonan, Korea</h3>
          <ul>
            <li>• Bachelor's degree in Industrial Design</li>
          </ul>
          <h3>Sprott Shaw College (2016 - 2017) Vancouver, Canada</h3>
          <ul>
            <li>• Business Administration Management Program</li>
          </ul>
          <h3>
            Fashion Institute Of Design & Merchandising (2013) Los Angeles, USA
          </h3>
          <ul>
            <li>• Winter Semester exchange student </li>
          </ul>
        </Section>
      </Content>
    </Container>
  );
}
