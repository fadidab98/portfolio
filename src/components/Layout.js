// components/Layout.jsx
import { AnimatePresence } from "framer-motion";
import Loading from "./loading";
import dynamic from "next/dynamic";

const Header = dynamic(() => import('./Header'), { ssr: false }); // Footer likely not critical for SSR

export default function Layout({ children, loading }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative flex-1">
        <AnimatePresence>
          {loading && <Loading />}
        </AnimatePresence>
        {children}
      </div>
    </div>
  );
}