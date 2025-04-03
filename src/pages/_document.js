import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>FadiLogic</title>
        <meta
          name="description"
          content="Fadi Dabboura’s portfolio of a Machine Learning Engineer and full-stack Developer."
        />
        <meta
          name="keywords"
          content="machine learning, full-stack, backend, devops, Docker, nginx, reactjs, js, docker-compose, nextjs, portfolio"
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