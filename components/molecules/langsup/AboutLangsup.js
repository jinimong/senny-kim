import styled from 'styled-components';

const videos = [
  {
    id: 0,
    iframe: () => (
      <iframe
        width="304"
        height="171"
        src="https://www.youtube.com/embed/qOwCpAaqJRM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    description: `"놀면서 대화를 하는 것만으로도 실력이 월등이 높아질 수 있어요"`,
  },
  {
    id: 1,
    iframe: () => (
      <iframe
        width="304"
        height="171"
        src="https://www.youtube.com/embed/K698U6HdGSQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    description: `"주제가 재밌어서 저도 모르게 너무 신나서 튜터랑 막 이야기를 하고 있는 거에요. 영어로!"`,
  },
  {
    id: 2,
    iframe: () => (
      <iframe
        width="304"
        height="171"
        src="https://www.youtube.com/embed/P9KMs4JtSmU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    description: `"외국인을 만나면 말 한마디를 못했어요. 지금은 나도 영어를 대화할 수 있구나하는 자신감이 생겼어요."`,
  },
  {
    id: 3,
    iframe: () => (
      <iframe
        width="304"
        height="171"
        src="https://www.youtube.com/embed/AiYt4dSEaNQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    description: `"스페인어로 대화하는데 25분이 어떻게 가는지 모르게 대화에 몰입했어요."`,
  },
];

const Container = styled.div`
  ul {
    width: 22.5rem;
    text-align: left;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--gray);
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    li + li {
      margin-top: 1em;
    }
  }
`;

const AboutLangsup = () => (
  <Container>
    <h3>About langsup</h3>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: 'fit-content',
          height: 'fit-content',
          gap: '1rem 1.5rem',
        }}
      >
        {videos.map(({ id, iframe: Iframe, description }) => (
          <div key={id} style={{ width: '19rem' }}>
            <Iframe />
            <p style={{ fontSize: '0.75rem', lineHeight: '1rem' }}>
              {description}
            </p>
          </div>
        ))}
      </div>
      <div style={{ marginLeft: '5rem' }}>
        <ul>
          <li>✓ Speaking Community based on common interests</li>
          <li>✓ All type of contents related to Speaking</li>
          <li>✓ 1:1 Speaking Chance</li>
        </ul>
        <div
          style={{
            color: 'var(--blue)',
            marginTop: '3rem',
            fontSize: '1rem',
            width: '25rem',
          }}
        >
          langsup provides a pleasant experience of talking in a foreign
          language and to improve one's skills
        </div>
      </div>
    </div>
  </Container>
);

export default AboutLangsup;
