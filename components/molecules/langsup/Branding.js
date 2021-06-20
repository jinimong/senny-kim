import Image from 'next/image';
import styled from 'styled-components';
import { flexCenterStyle } from '../../../styles/common';

const Container = styled.div`
  ${flexCenterStyle}
  flex-direction: column;

  h3 {
    margin-bottom: 0.5rem;
  }

  h5 {
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: var(--navy);
    margin-bottom: 5.25rem;
  }

  .images {
    ${flexCenterStyle}
    width: 100vw;
    height: 120vh;
  }
`;

const Branding = () => (
  <Container>
    <h3>Branding</h3>
    <h5>Concept and Logo</h5>
    <div className="images">
      <div style={{ width: '50vw', height: '100%', position: 'relative' }}>
        <Image
          src="/assets/branding-left.png"
          layout="fill"
          objectFit="scale-down"
        />
      </div>
      <div style={{ width: '50vw', height: '100%', position: 'relative' }}>
        <Image
          src="/assets/branding-right.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  </Container>
);

export default Branding;
