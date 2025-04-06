// pages/_app.jsx
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';


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
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Fadi Dabboura",
        url: "https://fadilogic.serp24.online",
        sameAs: [
          "https://www.linkedin.com/in/fadi-dabboura-8300bb211",
          "https://www.facebook.com/fadi.dabboura.73",
          "https://www.instagram.com/dabbourafadi", // Optional: Keep if relevant
        ],
        jobTitle: "DevOps Engineer & Web Developer",
        brand: { "@type": "Brand", name: "FadiLogic" },
        description: "Fadi Dabboura’s FadiLogic offers a free website scan tool and showcases DevOps and web development projects.",
      }),
    }}
  />
</Head>
      <DefaultSeo
        title="Fadi Dabboura - Portfolio & Website Scan | FadiLogic"
        description="Fadi Dabboura’s FadiLogic: Official site featuring a free website scan tool and DevOps portfolio."
        canonical="https://fadilogic.serp24.online/"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://fadilogic.serp24.online/",
          siteName: "FadiLogic",
          title: "Fadi Dabboura - Portfolio & Website Scan | FadiLogic",
          description:
            "Fadi Dabboura’s FadiLogic: Free webscan tool and portfolio of DevOps projects shared on LinkedIn and Facebook.",
          images: [
            {
              url: "/images/FadiLogic.webp",
              width: 1200,
              height: 630,
              alt: "Fadi Dabboura Website Scan and Portfolio",
              type: "image/webp",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "fadi, dabboura, website scan, webscan, FadiLogic, web scan tool, website performance, web development, devops",
          },
          {
            name: "author",
            content: "Fadi Dabboura",
          },
        ]}

      />
      <Layout loading={loading} >
        {loading ? null : <Component {...pageProps} key={pageKey} />}
      </Layout>
    </Provider>
  );
}