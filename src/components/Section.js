export default function Section({ id, children, className }) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
