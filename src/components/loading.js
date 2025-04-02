import dynamic from 'next/dynamic';

// components/Loading.jsx
const motion = dynamic(
  () => import('framer-motion').then(mod => mod.motion),
  { ssr: false }
)
export default function Loading() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        {/* Optional: Add centered text */}
       
      </div>
    </motion.div>
  );
}