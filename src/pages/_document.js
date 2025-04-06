import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic SEO Tags */}
        <meta
          name="description"
          content="Fadi Dabboura’s professional portfolio showcasing expertise as a DevOps Engineer and Full-Stack Developer."
        />
        <meta
          name="keywords"
          content="devops, full-stack, backend, software engineering, Docker, nginx, reactjs, javascript, docker-compose, nextjs, portfolio"
        />
        <meta name="author" content="Fadi Dabboura" />
        {/* Fallback Open Graph Tags */}
        <title>Fadi Dabboura - Portfolio & Website Scan | FadiLogic</title>
        <meta property="og:title" content="Fadi Dabboura - Portfolio & Website Scan | FadiLogic" />
        <meta property="og:description" content="Fadi Dabboura’s FadiLogic: Free webscan tool and portfolio of DevOps projects shared on LinkedIn and Facebook." />
        <meta property="og:image" content="https://fadilogic.serp24.online/images/FadiLogic.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fadi Dabboura Website Scan and Portfolio" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://fadilogic.serp24.online/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FadiLogic" />
        <meta property="og:locale" content="en_US" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}