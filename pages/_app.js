import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import Script from 'next/script'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TNYEKWP2VN"></Script>
        <Script id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html:`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-TNYEKWP2VN');
  `, }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
