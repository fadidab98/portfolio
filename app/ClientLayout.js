'use client';

import { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { usePathname } from 'next/navigation';
import { store } from '@/lib/store';
import Layout from '@/components/Layout';


export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <Provider store={store}>
      <Layout loading={loading}>
        {children}
       
      </Layout>
    </Provider>
  );
}