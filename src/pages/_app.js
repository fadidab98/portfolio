import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Head from 'next/head';

const Provider = dynamic(
  () => import('react-redux').then((mod) => mod.Provider),
  {
    ssr: false,
  }
);

import { store } from '../lib/store';

const inter = Inter({
  subsets: ['latin'],
  weights: [400, 700],
  display: 'swap',
  preload: true,
});

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [pageKey, setPageKey] = useState(0);
  const router = useRouter();
  const MIN_LOADING_DURATION = 500;

  useEffect(() => {
    let timeoutId;
    const handleStart = () => {
      if (timeoutId) clearTimeout(timeoutId);
      setLoading(true);
    };

    const handleComplete = () => {
      const startTime = Date.now();
      timeoutId = setTimeout(
        () => {
          setLoading(false);
          setPageKey((prev) => prev + 1);
        },
        Math.max(0, MIN_LOADING_DURATION - (Date.now() - startTime))
      );
    };

    const handleError = handleComplete;

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <DefaultSeo
        titleTemplate="%s | FadiLogic"
        defaultTitle="FadiLogic - DevOps & Web Development"
        description="FadiLogic by Fadi Dabboura: Portfolio, free website scan tool, and expert DevOps and web development services."
        canonical="https://fadilogic.serp24.online/"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://fadilogic.serp24.online/',
          siteName: 'FadiLogic',
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
        ]}
      />

      <Head>
        <link
          rel="preload"
          href="https://www.googletagmanager.com/gtag/js?id=G-FZDKPTV5X5"
          as="script"
        />
      </Head>

      <Script
        strategy="afterInteractive"
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-FZDKPTV5X5"
        data-cache="true"
      />
      <Script
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
      />

      <Layout loading={loading}>
        <main
          style={{ display: loading ? 'none' : 'block' }}
          className={inter.className}
        >
          <Component {...pageProps} key={pageKey} />
        </main>
      </Layout>
    </Provider>
  );
}
