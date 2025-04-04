// pages/_app.jsx
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weights: [400, 700], display: 'swap' });

const Provider = dynamic(() => import('react-redux').then((mod) => mod.Provider), { ssr: false });
import { store } from '../lib/store';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

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
      console.log('Route change started');
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      setLoading(true);
    };

    const handleComplete = () => {
      console.log('Route change completed');
      const startTime = Date.now();
      const elapsed = () => Date.now() - startTime;
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        console.log('Turning off loading after delay');
        if (isMountedRef.current) {
          setLoading(false);
          setPageKey((prev) => prev + 1);
        }
      }, Math.max(0, MIN_LOADING_DURATION - elapsed()));
    };

    const handleError = () => {
      console.log('Route change error');
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      if (isMountedRef.current) {
        setLoading(false);
        setPageKey((prev) => prev + 1);
      }
    };

    console.log('Registering router events');
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      console.log('Cleaning up router events');
      isMountedRef.current = false;
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  console.log('Loading state in _app:', loading);

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo
        title="Fadi Dabboura - FadiLogic"
        description="Fadi Dabboura’s FadiLogic: Official portfolio and web scan tool by a DevOps Engineer."
        canonical="https://fadilogic.serp24.online/"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://fadilogic.serp24.online/',
          siteName: 'FadiLogic',
          title: 'Fadi Dabboura - FadiLogic Official Site',
          description: 'Explore Fadi Dabboura’s FadiLogic portfolio and free web scan tool on GitHub, LinkedIn, and more as a DevOps Engineer.',
          images: [
            {
              url: 'https://fadilogic.serp24.online/images/FadiLogic.webp',
              width: 1200,
              height: 630,
              alt: 'FadiLogic by Fadi Dabboura',
              type: 'image/webp',
            },
          ],
        }}
      />
      <Layout loading={loading} className={`${inter.className}`}>
        {loading ? null : <Component {...pageProps} key={pageKey} />}
      </Layout>
    </Provider>
  );
}