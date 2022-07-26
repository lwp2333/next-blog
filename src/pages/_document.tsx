import { Head, Html, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fff" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="author" content="lwp2333" />
        <meta name="keywords" content="五边形的男人,生活片段" />
        <meta name="description" content="lwp2333 life fragment" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="next-blog" />
        <meta name="application-name" content="next-blog" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script defer src="/live2d-widget/L2Dwidget.min.js"></script>
      <script defer src="/live2d-widget/init.js"></script>
    </Html>
  )
}
