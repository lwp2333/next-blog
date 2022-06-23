import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ActiveLink from '@/components/ActiveLink'
import logo from '@/assets/image/logo.png'
interface Props {}

const Header: FC<Props> = props => {
  const [menuShow, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(pre => !pre)
  }
  return (
    <header className="sticky top-0  left-0 z-50 w-full bg-white bg-opacity-80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full items-center justify-start px-4 sm:px-8 md:max-w-5xl">
        <Link href="/home" replace>
          <Image className="cursor-pointer" src={logo} width={128} height={43} alt="logo" />
        </Link>
        {/* pc */}
        <div className="ml-0 hidden md:ml-20 md:block">
          <div className="ml-10 flex items-baseline space-x-12">
            <ActiveLink href="/blog" replace className="px-3 py-2">
              代码世界
            </ActiveLink>
            <ActiveLink href="/docs" replace className="px-3 py-2 ">
              知识小册
            </ActiveLink>
            <ActiveLink href="/plog" replace className="px-3 py-2">
              生活片段
            </ActiveLink>
            <ActiveLink href="/about" replace className="px-3 py-2">
              关于更多
            </ActiveLink>
          </div>
        </div>
        {/* mobile */}

        <div className="flex  flex-1 justify-end md:hidden">
          <button type="button" className="inline-flex items-center justify-center text-[#303846]" onClick={toggleMenu}>
            {menuShow ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {menuShow && (
            <div className="absolute right-0 top-16 w-full bg-white bg-opacity-80 backdrop-blur-md">
              <div className="flex flex-col justify-start pl-3">
                <ActiveLink href="/blog" replace className="px-3 py-2">
                  代码世界
                </ActiveLink>
                <ActiveLink href="/docs" replace className="px-3 py-2">
                  知识小册
                </ActiveLink>
                <ActiveLink href="/plog" replace className="px-3 py-2">
                  生活片段
                </ActiveLink>
                <ActiveLink href="/about" replace className="px-3 py-2">
                  关于更多
                </ActiveLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
