import { NextPage, GetServerSidePropsContext } from 'next'
import prisma from '@/services/prisma'
import { user } from 'prisma/prisma-client'
import Layout from '@/layout'
import Link from 'next/link'

interface Props {
  userList: user[]
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userList = await prisma.user.findMany()
  return {
    props: {
      userList,
    },
  }
}

const Home: NextPage<Props> = ({ userList }) => {
  return (
    <Layout>
      <Link href="/about">About</Link>
    </Layout>
  )
}

export default Home
