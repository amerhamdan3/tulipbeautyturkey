import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { useEffect } from 'react';

export default function Document() {

  return (
    <Html lang="ar" >
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Gulzar&family=Harmattan:wght@500&display=swap" rel="stylesheet"></link>
      <body dir='rtl'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
