import { useEffect } from 'react'
import { NextPage, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { Button } from 'antd'
import styles from './index.module.scss'
import useAsyncLoading from '@/hooks/useAsyncLoading'
import AsyncLoadingView from '@/components/asyncLoadingView'
import prisma from '@/lib/prisma'

const mockApi = (): Promise<string> => {
  const time = Math.random() * 400
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('此次请求耗时: ' + time + 'ms')
    }, time)
  })
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await prisma.user.findMany()
  return {
    props: {
      list: res,
    },
  }
}

export default function Loading<NextPage>(props: { list: any }) {
  const [mock, { loading, data, error }] = useAsyncLoading(mockApi, 200)

  useEffect(() => {
    mock()
  }, [mock])
  return (
    <div className={styles.container}>
      <Head>
        <title>Loading-Page</title>
        <meta name="description" content="lwp2333 Learn Next apollo/client graphql" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AsyncLoadingView loading={loading} error={error}>
          {JSON.stringify(data)}
        </AsyncLoadingView>
        <Button type="link" onClick={mock}>
          刷新
        </Button>
        {JSON.stringify(props.list)}
      </main>
    </div>
  )
}
