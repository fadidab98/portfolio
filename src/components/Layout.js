import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeIsMobile } from '@/lib/settingSlice';
import Header from './Header'; // Static import since SSR is enabled

const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
);
const Footer = dynamic(() => import('./Footer'), { ssr: true });
const Loading = dynamic(() => import('./loading'), { ssr: false });

export default function Layout({ children, loading }) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    dispatch(changeIsMobile(isMobile));
  }, [isMobile]);

  console.log(isMobile);

  return (
    <>
      <Header />
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      {children}
      <Footer />
    </>
  );
}
