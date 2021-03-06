import Image from 'next/image';

const Poster = ({ children, title, imageSrc, videoCode }) => (
  <div style={{ color: 'var(--charcoal)' }} className="w-3/4 mx-auto">
    <div
      className="mt-44 font-bold text-xl mx-auto"
      style={{
        maxWidth: '72rem',
      }}
    >
      {title}
    </div>
    <div
      className="mt-8 flex justify-between align-center mx-auto"
      style={{ height: '32rem', maxWidth: '72rem' }}
    >
      <div className="w-96 relative">
        <Image
          src={imageSrc}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="w-8/12 bg-gray-200">
        <iframe
          style={{
            width: '100%',
            height: '32rem',
          }}
          src={`https://www.youtube-nocookie.com/embed/${videoCode}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <div className="mx-auto" style={{ height: '32rem', maxWidth: '72rem' }}>
      {children}
    </div>
  </div>
);

export default Poster;
