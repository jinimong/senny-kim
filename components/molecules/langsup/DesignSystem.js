import Image from 'next/image';
import styled from 'styled-components';
import { flexCenterStyle } from '../../../styles/common';

const fonts = [
  {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
    type: 'Bold',
    color: 'var(--gray)',
  },
  {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 400,
    type: 'Regular',
    color: 'var(--gray)',
  },
  {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 300,
    type: 'Light',
    color: 'var(--gray)',
  },
  {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 700,
    type: 'Bold',
    color: 'var(--gray)',
  },
  {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 400,
    type: 'Regular',
    color: 'var(--gray)',
  },
  {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 300,
    type: 'Light',
    color: 'var(--gray)',
  },
  {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
    type: 'Bold',
    color: 'var(--gray)',
  },
  {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
    type: 'Regular',
    color: 'var(--blue)',
  },
  {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 300,
    type: 'Light',
    color: 'var(--gray)',
  },
  {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 700,
    type: 'Bold',
    color: 'var(--gray)',
  },
  {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 400,
    type: 'Regular',
    color: 'var(--gray)',
  },
  {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 300,
    type: 'Light',
    color: 'var(--gray)',
  },
  {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 700,
    type: 'Bold',
    color: 'var(--gray)',
  },
  {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 400,
    type: 'Regular',
    color: 'var(--gray)',
  },
  {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 300,
    type: 'Light',
    color: 'var(--gray)',
  },
  {
    fontSize: 10,
    lineHeight: 18,
    fontWeight: 700,
    type: 'Bold',
    color: 'var(--gray)',
  },
  {
    fontSize: 10,
    lineHeight: 18,
    fontWeight: 400,
    type: 'Regular',
    color: 'var(--gray)',
  },
  {
    fontSize: 10,
    lineHeight: 18,
    fontWeight: 300,
    type: 'Light',
    color: 'var(--gray)',
  },
];

const images = [
  { title: 'Main Colours', src: '/assets/main-colours.png' },
  { title: 'Notification Colours', src: '/assets/notification-colours.png' },
  { title: 'Background Colours', src: '/assets/background-colours.png' },
  { title: 'Icon Sets', src: '/assets/icon-sets.png' },
];

const Container = styled.div`
  width: 80vw;
  margin: auto;
  ${flexCenterStyle}
  flex-direction: column;
`;

const SmallTitle = styled.h5`
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--gray);
  margin-bottom: 2rem;
`;

const DesignSystem = () => (
  <Container>
    <h3>Design System</h3>
    <div
      style={{
        marginTop: '2.5rem',
        position: 'relative',
        width: '50%',
        height: '25vh',
      }}
    >
      <Image src="/assets/font.gif" layout="fill" objectFit="scale-down" />
    </div>
    <div
      style={{
        marginTop: '2.5rem',
        display: 'grid',
        rowGap: '1rem',
        columnGap: '4rem',
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      {fonts.map(({ color, fontSize, lineHeight, fontWeight, type }) => {
        const info = `${fontSize}/${lineHeight}`;
        const key = `${info} ${type}`;
        const style = {
          color,
          fontSize: `${fontSize / 16}rem`,
          lineHeight: `${lineHeight / 16}rem`,
          fontWeight,
        };
        return (
          <div key={key} style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                width: '10vw',
                fontSize: '0.875rem',
                fontWeight: '300',
                color,
              }}
            >
              {key}
            </span>
            <span style={style}>{`${info} ABC 가나다`}</span>
          </div>
        );
      })}
    </div>
    <div
      style={{
        marginTop: '4rem',
        width: '50%',
        height: '85vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {images.map(({ title, src }) => {
        return (
          <div key={title}>
            <SmallTitle>{title}</SmallTitle>
            <div
              style={{
                position: 'relative',
                width: '70%',
                padding: '1rem',
                height: '100%',
              }}
            >
              <Image
                src={src}
                layout="fill"
                objectFit="contain"
                objectPosition="left top"
              />
            </div>
          </div>
        );
      })}
    </div>
  </Container>
);

export default DesignSystem;
