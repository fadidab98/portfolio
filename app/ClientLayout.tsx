'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { store } from '@/lib/store';
import { usePathname } from 'next/navigation';

const Provider = dynamic(() => import('react-redux').then(mod => mod.Provider), {
  ssr: false,
});

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isInitialLoad = useRef<boolean>(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <Provider store={store}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pathname={pathname} />
      <main>{loading ? <Loading /> : children}</main>
      <Footer />
      <noscript>
        <style>{`.hidden { display: block !important; }`}</style>
        <div className="text-center p-4 bg-red-500 text-white">
          JavaScript is disabled. Some features may not work.
        </div>
      </noscript>
    </Provider>
  );
}