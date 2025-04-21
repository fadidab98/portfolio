// components/Loading.jsx

export default function Loading() {
  return (
    <div className="relative min-h-screen flex justify items-center justify-center">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
      {/* Optional: Add centered text */}
    </div>
  );
}
