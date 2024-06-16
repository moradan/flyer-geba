import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
      </Head>
      <body data-bs-theme="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
