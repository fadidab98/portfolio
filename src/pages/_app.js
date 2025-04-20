import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import { store } from '../lib/store';
import { Inter } from 'next/font/google';
import { DefaultSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Provider = dynamic(
  () => import('react-redux').then((mod) => mod.Provider),
  { ssr: false }
);
const inter = Inter({
  subsets: ['latin'],
  weights: [400, 700],
  display: 'swap',
});

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
      timeoutIdRef.current = setTimeout(
        () => {
          if (isMountedRef.current) {
            setLoading(false);
            setPageKey((prev) => prev + 1);
          }
        },
        Math.max(0, MIN_LOADING_DURATION - elapsed())
      );
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
      <DefaultSeo
        titleTemplate="%s | FadiLogic"
        defaultTitle="FadiLogic - DevOps & Web Development"
        description="Explore Fadi Dabboura’s FadiLogic: Portfolio, free website scan tool, and expert DevOps and web development services."
        canonical="https://fadilogic.serp24.online/"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://fadilogic.serp24.online/',
          siteName: 'FadiLogic',
          title: 'FadiLogic - DevOps & Web Development',
          description:
            'Explore Fadi Dabboura’s FadiLogic: Portfolio, free website scan tool, and expert DevOps and web development services.',
          images: [
            {
              url: 'https://fadilogic.serp24.online/images/FadiLogic.png',
              width: 1200,
              height: 630,
              alt: 'FadiLogic by Fadi Dabboura',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: 'FadiLogic - DevOps & Web Development',
          description:
            'Explore Fadi Dabboura’s FadiLogic: Portfolio, free website scan tool, and expert DevOps and web development services.',
          image: 'https://fadilogic.serp24.online/images/FadiLogic.png',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            name: 'author',
            content: 'Fadi Dabboura',
          },
          {
            name: 'theme-color',
            content: '#1a202c',
          },
        ]}
      />
      <Head>
        <meta
          property="og:title"
          content="FadiLogic - DevOps & Web Development"
        />
        <meta
          property="og:description"
          content="Explore Fadi Dabboura’s FadiLogic: Portfolio, free website scan tool, and expert DevOps and web development services."
        />
        <meta
          property="og:image"
          content="https://fadilogic.serp24.online/images/FadiLogic.png"
        />
        <meta property="og:url" content="https://fadilogic.serp24.online/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <script
        strategy="afterInteractive"
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-FZDKPTV5X5"
        data-cache="true"
      ></script>
      <script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(() => {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FZDKPTV5X5');
            }, 1000);
          `,
        }}
      ></script>

      <Layout loading={loading}>
        <Component
          style={{ display: loading ? 'none' : 'block' }}
          className={inter.className}
          {...pageProps}
          key={pageKey}
        />
      </Layout>
    </Provider>
  );
}
