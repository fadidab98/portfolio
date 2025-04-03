// components/Layout.jsx
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import { cloneElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeIsMobile } from '@/lib/settingSlice';

const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
);
const Header = dynamic(() => import('./Header'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });
const Loading = dynamic(() => import('./loading'), { ssr: false });

export default function Layout({ children,loading }) {
 
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  
  useEffect(() => {
    dispatch(changeIsMobile(isMobile))
  },[isMobile])
console.log(isMobile)



  return (
    <main >
      <Header />
      
        <AnimatePresence>
          {loading && <Loading />}
        </AnimatePresence>
        {children}
     
      <Footer/>
    </main>
  );
}