import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import SEO from '../config/next-seo.config';
import ScrollContextProvider from '../components/contexts/ScrollContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ScrollContextProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ScrollContextProvider>
  );
}

export default MyApp;
