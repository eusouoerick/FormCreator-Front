import type { AppProps } from 'next/app';
import { GlobalStyles } from 'src/styles/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyles();
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
