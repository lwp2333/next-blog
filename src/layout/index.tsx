import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import Dynamic from 'next/dynamic'

const L2Dwidget = Dynamic(() => import('@/components/L2Dwidget'), { ssr: false })

interface Props {
  tilte?: string
  children?: ReactNode
  noHeader?: boolean
  noFooter?: boolean
}

const Layout: FC<Props> = props => {
  const { tilte = 'lwp‘s life', children = null, noFooter = false, noHeader = false } = props

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>{tilte}</title>
      </Head>
      {!noHeader && <Header />}
      <main className={`w-full ${noFooter ? '' : 'pb-52'}`}>{children}</main>
      {!noFooter && <Footer />}
      <L2Dwidget />
    </div>
  )
}

export default Layout
