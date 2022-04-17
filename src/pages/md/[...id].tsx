import React from 'react'
import { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown' // 解析 markdown
import remarkGfm from 'remark-gfm' // markdown 对表格/删除线/脚注等的支持
import MarkNav from 'markdown-navbar' // markdown 目录
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface Props {
  content: string
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id = [] } = context.params as { id: string[] }
  const res = await fetch(`http://localhost:3000/${id[0]}.md`)
  if (res.status !== 404) {
    const content = await res.text()
    return {
      props: {
        content,
      },
    }
  } else {
    throw new Error('not found')
  }
}

const MdPage: NextPage<Props> = ({ content }) => {
  const [source, setSource] = React.useState<string>(content)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>next-prisma-mysql</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 items-stretch justify-center">
        <div className="w-1/5 px-2 py-6">
          <MarkNav className="sticky top-6" source={source} ordered={true} />
        </div>
        <div className="w-4/5 px-2 py-6">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
            remarkPlugins={[remarkGfm]}
          >
            {source}
          </ReactMarkdown>
        </div>
      </main>
      <footer className="flex h-8 w-full items-center justify-center border-t bg-slate-50">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image unoptimized src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default MdPage
