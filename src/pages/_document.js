import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>FadiLogic</title>
        <meta
          name="description"
          content="Fadi Dabboura’s professional portfolio showcasing expertise as a DevOps Engineer and Full-Stack Developer."
        />
        <meta
          name="keywords"
          content="devops, full-stack, backend, software engineering, Docker, nginx, reactjs, javascript, docker-compose, nextjs, portfolio"
        />
        <meta name="author" content="Fadi Dabboura" />
        {/* Add any global favicon or meta tags here */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}