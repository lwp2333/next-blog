import { useEffect } from 'react'
import { NextPage, GetServerSidePropsContext } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Button } from 'antd'
import styles from './index.module.scss'

const DynamicComponentWithNoSSR = dynamic(() => import('@/components/waterMarkSvg'), { ssr: false })

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {},
  }
}

export default function Loading<NextPage>(props: {}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>waterMark-Page</title>
        <meta name="description" content="lwp2333 Learn Next apollo/client graphql" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DynamicComponentWithNoSSR text="李伟平 6683" fontSize={14}>
          <Button type="link">刷新</Button>
        </DynamicComponentWithNoSSR>
      </main>
    </div>
  )
}
