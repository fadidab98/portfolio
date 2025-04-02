// components/Layout.jsx
import { AnimatePresence } from "framer-motion";
import Loading from "./loading";
import Header from "./Header";

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