import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
