import { useCallback } from 'react';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import SEO from '../config/next-seo.config';

function MyApp({ Component, pageProps }) {
  const prevent = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <div onContextMenu={prevent} onDragStart={prevent}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
