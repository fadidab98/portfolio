interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto ${className || ''} border border-accent/20 m-12 rounded-md`}
      style={{ border: ' 1px solid #d4af37' }}
    >
      {children}
    </section>
  );
}