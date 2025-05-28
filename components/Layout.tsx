'use client';

import { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { usePathname } from 'next/navigation';
import { store } from '@/lib/store';
import Loading from './Loading';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
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
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pathname={pathname || ''} />
      <main>{loading ? <Loading /> : children}</main>
      <Footer />
      <noscript>
        <style>{`.hidden { display: block !important; }`}</style>
      </noscript>
    </Provider>
  );
}