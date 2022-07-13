import '../styles/globals.scss'
import Layout from '../component/Layout';
import { AppPropsWithLayout } from '../component/models/layout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LatoutWrapper = Component.Layout ?? Layout;
  return (
  <LatoutWrapper>
    <Component {...pageProps} />
  </LatoutWrapper>
  );
}

export default MyApp
