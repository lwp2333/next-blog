import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import notFoundSvg from '@/assets/svg/404.svg'
import Head from 'next/head'

const NotFoundPage: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>404 pgae</title>
      </Head>
      <div className="relative h-screen overflow-hidden bg-indigo-900">
        <Image src={notFoundSvg} layout="fill" className="absolute h-full w-full object-cover" alt="404.png" />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="container relative z-10 mx-auto flex items-center px-6 py-32 md:px-12 xl:py-40">
          <div className="relative z-10 flex w-full flex-col items-center font-mono">
            <h1 className="mt-4 text-center text-5xl font-extrabold leading-tight text-white">
              You&#x27;re alone here
            </h1>
            <p className="my-44 animate-bounce text-8xl font-extrabold text-white">404</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
