// components/Layout.jsx
import dynamic from "next/dynamic";

const AnimatePresence = dynamic(
  () => import('framer-motion').then(mod => mod.AnimatePresence),
  { ssr: false }
);import Loading from "./loading";

const Header = dynamic(() => import('./Header'), { ssr: false }); // Footer likely not critical for SSR
const Footer = dynamic(() => import('./Footer'), { ssr: false }); // Footer likely not critical for SSR

export default function Layout({ children, loading }) {
  return (
    < >
      <Header />
      
        <AnimatePresence>
          {loading && <Loading />}
        </AnimatePresence>
        {children}
     
      <Footer/>
    </>
  );
}