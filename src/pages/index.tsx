import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import welComeSvg from '@/assets/svg/welcome.svg'
import avatar from '@/assets/image/avatar.png'

const Home: NextPage = () => {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      <Image src={welComeSvg} layout="fill" className="absolute h-full w-full object-cover" alt="welComeSvg.svg" />
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="relative z-10 flex w-full flex-col items-center">
        <Image
          unoptimized
          src={avatar}
          width={96}
          height={96}
          className="cursor-pointer rounded-full hover:animate-spin"
          alt="avatar.png"
        />
        <p className="mt-8 text-3xl font-extrabold text-white lg:text-4xl">五边形的男人</p>
        <p className="mt-6 text-lg font-extrabold text-white">集中一点 登峰造极</p>
        <Link replace href="/home">
          <span className="mt-10 block animate-bounce cursor-pointer rounded-full bg-gray-800 py-3 px-4 text-lg font-bold  text-white hover:bg-gray-900">
            立即进入
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Home
