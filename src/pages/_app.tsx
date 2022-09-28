import { GlobalStyles } from 'src/styles/stitches.config';
import { AppPropsWithLayout } from 'src/types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  GlobalStyles();
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
