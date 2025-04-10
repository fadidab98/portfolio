import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../lib/store';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weights: [400, 700], display: 'swap' });

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const MIN_LOADING_DURATION = 500;
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    const handleStart = () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      setLoading(true);
    };

    const handleComplete = () => {
      const startTime = Date.now();
      timeoutIdRef.current = setTimeout(() => {
        setLoading(false);
      }, Math.max(0, MIN_LOADING_DURATION - (Date.now() - startTime)));
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      clearTimeout(timeoutIdRef.current);
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <script async defer src="https://www.googletagmanager.com/gtag/js?id=G-FZDKPTV5X5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FZDKPTV5X5');
            `,
          }}
        />
      </Head>
      <Layout loading={loading}>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  );
}