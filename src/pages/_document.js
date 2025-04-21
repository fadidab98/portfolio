import { Html, Head, Main, NextScript } from 'next/document';

// Global JSON-LD (applied to all pages)
const globalStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fadi Dabboura',
    url: 'https://fadilogic.serp24.online',
    jobTitle: 'DevOps Engineer & Web Developer',
    sameAs: [
      'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
      'https://github.com/fadidab98',
      'https://www.facebook.com/fadi.dabboura.73',
      'https://www.instagram.com/dabbourafadi',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FadiLogic',
    url: 'https://fadilogic.serp24.online',
    sameAs: [
      'https://www.linkedin.com/in/fadi-dabboura-8300bb211',
      'https://github.com/fadidab98',
      'https://www.facebook.com/fadi.dabboura.73',
      'https://www.instagram.com/dabbourafadi',
    ],
  },
];

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global Meta Tags */}
        <meta name="author" content="Fadi Dabboura" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64x64.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        {/* Global JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalStructuredData),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
