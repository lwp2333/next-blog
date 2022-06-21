import { NextPage, GetServerSidePropsContext } from 'next'
import prisma from '@/services/prisma'
import { user } from 'prisma/prisma-client'
import Layout from '@/layout'

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

const Docs: NextPage<Props> = ({ userList }) => {
  return (
    <Layout>
      <div className="flex min-h-[200px] w-full items-center justify-center">知识小册</div>
    </Layout>
  )
}

export default Docs
