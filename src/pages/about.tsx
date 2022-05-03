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
  return <Layout>About</Layout>
}

export default About
