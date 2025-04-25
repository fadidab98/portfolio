'use client';

import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeIsMobile } from '@/lib/settingSlice';

import Loading from './loading';

const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
);
const Footer = dynamic(() => import('./Footer'), { ssr: true });
const Header = dynamic(() => import('./Header'), { ssr: true });

export default function Layout({ children, loading }) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    dispatch(changeIsMobile(isMobile));
  }, [isMobile, dispatch]);

  return (
    <>
      <Header />
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      {children}
      <Footer />
    </>
  );
}
