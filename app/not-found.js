import Link from 'next/link';
import Section from '@/components/Section';

export const metadata = {
  title: '404 - Page Not Found | FadiLogic',
  description: 'The page you are looking for does not exist.',
  openGraph: {
    title: '404 - Page Not Found | FadiLogic',
    description: 'The page you are looking for does not exist.',
    url: 'https://fadilogic.serp24.online/404',
  },
  twitter: {
    title: '404 - Page Not Found | FadiLogic',
    description: 'The page you are looking for does not exist.',
  },
  alternates: {
    canonical: 'https://fadilogic.serp24.online/404',
  },
};

export default function NotFound() {
  return (
    <Section className="text-center my-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white tracking-tight">
        404 - Page Not Found
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
        The page you are looking for does not exist.{' '}
        <Link
          href="/"
          className="text-accent underline hover:text-accent/80 transition"
        >
          Return to home
        </Link>
        .
      </p>
    </Section>
  );
}
