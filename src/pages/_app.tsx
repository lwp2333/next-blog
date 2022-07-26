import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'

import '@/styles/globals.scss'
import '@/styles/tailwind.css'
import { motion } from 'framer-motion'

NProgress.configure({
  showSpinner: false,
})

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      NProgress.start()
    })
    router.events.on('routeChangeComplete', () => {
      NProgress.done()
    })
    router.events.on('routeChangeError', () => {
      NProgress.done()
    })
  })

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default App
