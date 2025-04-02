import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import dynamic from "next/dynamic";

const Provider = dynamic(
  () => import('react-redux').then(mod => mod.Provider),
  { ssr: false }
);
import { store } from '../lib/store';
export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [pageKey, setPageKey] = useState(0); // Unique key to force re-render
  const router = useRouter();
  const MIN_LOADING_DURATION = 500;
  const timeoutIdRef = useRef(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    const handleStart = () => {
      console.log("Route change started");
      if (timeoutIdRef.current) {
        console.log("Clearing previous timeout:", timeoutIdRef.current);
        clearTimeout(timeoutIdRef.current);
      }
      setLoading(true);
    };

    const handleComplete = () => {
      console.log("Route change completed");
      const startTime = Date.now();
      const elapsed = () => Date.now() - startTime;

      if (timeoutIdRef.current) {
        console.log("Clearing existing timeout before scheduling:", timeoutIdRef.current);
        clearTimeout(timeoutIdRef.current);
      }
      timeoutIdRef.current = setTimeout(() => {
        console.log("Turning off loading after delay");
        if (isMountedRef.current) {
          setLoading(false);
          setPageKey((prev) => prev + 1); // Update key to force page render
        }
      }, Math.max(0, MIN_LOADING_DURATION - elapsed()));
      console.log("Timeout scheduled, ID:", timeoutIdRef.current);
    };

    const handleError = () => {
      console.log("Route change error");
      if (timeoutIdRef.current) {
        console.log("Clearing timeout on error:", timeoutIdRef.current);
        clearTimeout(timeoutIdRef.current);
      }
      if (isMountedRef.current) {
        setLoading(false);
        setPageKey((prev) => prev + 1); // Update key on error too
      }
    };

    console.log("Registering router events");
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      console.log("Cleaning up router events");
      isMountedRef.current = false;
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
    };
  }, [router]);

  console.log("Loading state in _app:", loading);

  return (
    <Provider store={store}>
        <Layout loading={loading}>
      {loading ? null : <Component {...pageProps} key={pageKey} />}
    </Layout>
  </Provider>

  );
}