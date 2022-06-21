import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      {!noHeader && <Header />}
      <main className={`w-full ${noFooter ? '' : 'pb-52'}`}>{children}</main>
      {!noFooter && <Footer />}
    </div>
  )
}

export default Layout
