import { NextPage, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import styles from './index.module.scss'
import prisma from '@/lib/prisma'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await prisma.user.findMany()
  return {
    props: {
      list: res,
    },
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="lwp2333 Learn Next apollo/client graphql" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
