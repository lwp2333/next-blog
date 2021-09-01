import { NextPage, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import styles from './index.module.scss'
import prisma from '@/services/prisma'
import { user } from 'prisma/prisma-client'

interface Props {
  userList: user[]
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await prisma.user.findMany()
  return {
    props: {
      userList: res,
    },
  }
}

const Home: NextPage<Props> = ({ userList }) => {
  console.log('userList', userList)
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="lwp2333 Learn Next prisma ts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>push代码， webhook自动打包 ！</a>
        </h1>
        <h1 className={styles.title}>
          <a>更改version，pm2延迟72s restart！！！</a>
        </h1>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}

export default Home
