import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { useEffect } from 'react';

export default function Document() {

  return (
    <Html lang="ar" >
      <Head />
      <body dir='rtl'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
