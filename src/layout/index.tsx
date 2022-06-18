import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface Props {
  tilte?: string
  children?: ReactNode
}

const Layout: FC<Props> = props => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>{props.tilte}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-full w-full pb-48 pt-12">{props.children}</main>
      <Footer />
    </div>
  )
}
Layout.defaultProps = {
  tilte: 'lwp‘s life',
  children: null,
}

export default Layout
