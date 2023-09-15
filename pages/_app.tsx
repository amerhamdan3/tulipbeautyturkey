// import '@/styles/globals.css'
import '@/styles/bootstrap-rtl.css'
import '@/styles/animate.css'
import '@/styles/swiper-bundle.css'
import '@/styles/slick.css'
import '@/styles/magnific-popup.css'
import '@/styles/splide.css'
import '@/styles/font-awesome-pro.css'
import '@/styles/spacing.css'
import '@/styles/main.css'


import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { useEffect } from 'react'
import Head from 'next/head';
import Script from 'next/script'



export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('loading');
      if (loader)
        loader.remove();
    }
    
  }, []);
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '/js/main.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
        document.body.removeChild(script);
    };
}, []); // router prop or w/e
  return (
    <>
    <Head>
      <script async src={`/js/fun.js`} />
      {/* <script type='text/javascript' dangerouslySetInnerHTML={{ __html: `!function(e,t,n,o,a,c){((window.WebConnect = {}),((a = t.createElement(n)).src ='/js/fun.js'),(c = t.getElementsByTagName(n)[0]).parentNode.insertBefore(a, c))}(window,document,"script"),window.onload=function(){WebConnect.configOptions({apiHost: 'https://api.goboomtown.com',frameSource: 'https://webchat.goboomtown.com',})};`,}}/> */}
    </Head>
    <Layout/>
    <Nav />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}
