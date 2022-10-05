import { Toaster } from 'react-hot-toast';
import { GlobalStyles } from 'src/styles/stitches.config';
import { AppPropsWithLayout } from 'src/types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  GlobalStyles();
  return (
    <>
      <Toaster position='top-center' reverseOrder={true} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
