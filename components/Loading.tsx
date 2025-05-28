export default function Loading() {
  return (
    <div className="relative min-h-screen flex justify items-center justify-center">
      <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" style={{
          width: '4rem', // w-16
          height: '4rem', // h-16
          borderWidth: '4px', // border-4
          borderColor: '#d4af37', // border-accent (replace with your accent color)
          borderTopColor: 'transparent', // border-t-transparent
          borderRadius: '9999px', // rounded-full
          animation: 'spin 1s linear infinite', // animate-spin (matches Tailwind's spin)
        }} ></div>
    </div>
  );
}