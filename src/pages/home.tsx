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
    <Layout>
      <div className="mx-auto flex min-h-[360px] w-full items-center justify-center text-xl font-medium  text-slate-600 md:min-h-[480px] md:text-3xl">
        下一代轻量服务端渲染博客站点
      </div>
    </Layout>
  )
}

export default About
