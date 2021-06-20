import { useCallback } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const prevent = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <div onContextMenu={prevent} onDragStart={prevent}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
