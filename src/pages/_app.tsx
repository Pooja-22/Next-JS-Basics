// pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/navigation.css';
import '../styles/card.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
