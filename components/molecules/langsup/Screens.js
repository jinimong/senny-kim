import Image from 'next/image';
import styled from 'styled-components';
import { flexCenterStyle } from '../../../styles/common';

const Container = styled.div`
  ${flexCenterStyle}
  flex-direction: column;
  width: 80vw;
  margin: auto;
  margin-bottom: 5rem;
`;

const Label = styled.div`
  font-weight: 700;
  position: absolute;
  top: -3rem;
  left: 0;

  &::after {
    content: ' >';
  }
`;

const Phones = styled.div`
  ${flexCenterStyle}
  width: 100%;

  & > div {
    position: relative;
    width: 100%;
    min-height: 43.25rem;
    max-width: 23rem;
    ${flexCenterStyle}
  }

  & + & {
    margin-top: 6rem;
  }
`;

const Screens = () => (
  <Container>
    <h3>Screens</h3>
    <Phones>
      <div>
        <Label>Sign up</Label>
        <Image src="/assets/signup-1.png" layout="fill" objectFit="cover" />
      </div>
      <div>
        <Image src="/assets/signup-2.png" layout="fill" objectFit="cover" />
      </div>
      <div>
        <Image src="/assets/signup-3.png" layout="fill" objectFit="cover" />
      </div>
    </Phones>
    <Phones>
      <div />
      <div>
        <Label>Tutor Search</Label>
        <Image src="/assets/tutor-search.png" layout="fill" objectFit="cover" />
      </div>
      <div />
    </Phones>
    <Phones>
      <div />
      <div>
        <Label>Message</Label>
        <Image src="/assets/message-1.png" layout="fill" objectFit="cover" />
      </div>
      <div>
        <Image src="/assets/message-2.png" layout="fill" objectFit="cover" />
      </div>
    </Phones>
  </Container>
);

export default Screens;
