import '../styles/globals.scss'
import '../styles/theme.scss'

import NProgress from 'nprogress'
import '../styles/nprogress.scss'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

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
    <ConfigProvider locale={zhCN}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
export default App
