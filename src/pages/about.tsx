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

const About: NextPage<Props> = ({ userList }) => {
  return (
    <Layout tilte="关于更多">
      <div className="flex min-h-[200px] w-full items-center justify-center">关于更多</div>
    </Layout>
  )
}

export default About
