import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface Props {
  children?: ReactNode
}

const Layout: FC<Props> = props => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>lwp‘s life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
