import styled from 'styled-components';
import { flexCenterStyle } from '../../../styles/common';

const Container = styled.div`
  ${flexCenterStyle}
  flex-direction: column;

  & > div {
    ${flexCenterStyle}
  }
`;

const Pill = styled.div`
  background-color: var(--blue);
  color: var(--white);
  border-radius: 50%;
  font-size: 1.5rem;
  width: 9.375rem;
  height: 9.375rem;
  ${flexCenterStyle}

  & + & {
    margin-left: 3.125rem;
  }
`;

const ServiceStrategy = () => (
  <Container>
    <h3>Service Strategy</h3>
    <div>
      <Pill>Matching</Pill>
      <Pill>Content</Pill>
      <Pill>Feedback</Pill>
    </div>
    <div
      style={{
        marginTop: '2.75rem',
        width: '34.375rem',
        color: 'var(--lightgray)',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        textAlign: 'center',
      }}
    >
      Langsup matches tutors who have something in common based on Tutee's
      favorite hobbies, talents, and interests. Both the tutor and the tutee
      experience pleasant conversations by providing the latest relevant
      content. After the conversation, you will receive feedback for the tutee
      and a graph of the ability evaluation.
    </div>
  </Container>
);

export default ServiceStrategy;
