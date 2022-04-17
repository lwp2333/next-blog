import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import '@/styles/globals.scss'
import '@/styles/tailwind.css'
import 'markdown-navbar/dist/navbar.css'
import type { AppProps } from 'next/app'

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

  return <Component {...pageProps} />
}
export default App
