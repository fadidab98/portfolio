import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../lib/store';
import { DefaultSeo } from 'next-seo';
import { Inter } from 'next/font/google';
import Script from 'next/script';

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
      {/* Default SEO settings for all pages */}
      <DefaultSeo
        titleTemplate="%s | FadiLogic" // Appends "| FadiLogic" to all page titles
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

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-FZDKPTV5X5"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FZDKPTV5X5');
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
