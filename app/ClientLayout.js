'use client';

import { useState, useEffect, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import Layout from '@/components/Layout';
import Loading from '@/components/loading';

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  useEffect(() => {
    startTransition(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // MIN_LOADING_DURATION
      return () => clearTimeout(timer);
    });
  }, [pathname]);

  return (
    <Provider store={store}>
      <Layout loading={loading || isPending}>
        {loading ? <Loading /> : children}
      </Layout>
    </Provider>
  );
}
