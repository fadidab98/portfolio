'use client';

import { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { usePathname } from 'next/navigation';
import { store } from '@/lib/store';
import Layout from '@/components/Layout';

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const isInitialLoad = useRef(true); // Track initial load

  useEffect(() => {
    // Skip loading state on initial load
    if (isInitialLoad.current) {
      isInitialLoad.current = false; // Mark initial load as done
      return;
    }

    // Only trigger loading state for navigation
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <Provider store={store}>
      <Layout loading={loading}>{children}</Layout>
    </Provider>
  );
}
