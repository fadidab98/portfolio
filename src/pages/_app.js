import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Provider = dynamic(() => import('react-redux').then((mod) => mod.Provider), { ssr: false });
import { store } from '../lib/store';

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [pageKey, setPageKey] = useState(0);
  const router = useRouter();
  const MIN_LOADING_DURATION = 500;
  const timeoutIdRef = useRef(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    const handleStart = () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      setLoading(true);
    };

    const handleComplete = () => {
      const startTime = Date.now();
      const elapsed = () => Date.now() - startTime;
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          setLoading(false);
          setPageKey((prev) => prev + 1);
        }
      }, Math.max(0, MIN_LOADING_DURATION - elapsed()));
    };

    const handleError = () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      if (isMountedRef.current) {
        setLoading(false);
        setPageKey((prev) => prev + 1);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      isMountedRef.current = false;
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FZDKPTV5X5"
        ></script>
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
        {loading ? null : <Component {...pageProps} key={pageKey} />}
      </Layout>
    </Provider>
  );
}