import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/navigation.css';
import '../styles/card.css';
import '../styles/post.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
