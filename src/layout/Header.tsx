import { FC, useCallback, useState } from 'react'
import Image from 'next/image'
import ActiveLink from '@/components/ActiveLink'
import logo from '@/assets/image/logo.png'
import { motion } from 'framer-motion'

interface Props {}

const Header: FC<Props> = props => {
  const [menuShow, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(pre => !pre)
  }

  const MenuList = useCallback(() => {
    return (
      <>
        <ActiveLink href="/blog" className="px-3 py-2">
          代码世界
        </ActiveLink>
        <ActiveLink href="/docs" className="px-3 py-2 ">
          知识小册
        </ActiveLink>
        <ActiveLink href="/plog" className="px-3 py-2">
          生活片段
        </ActiveLink>
        <ActiveLink href="/about" className="px-3 py-2">
          关于更多
        </ActiveLink>
      </>
    )
  }, [])
  return (
    <header className="sticky top-0  left-0 z-50 w-full bg-white bg-opacity-80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full items-center justify-start px-4 sm:px-8">
        <ActiveLink href="/home" replace>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.72, 0.2, 1.0],
            }}
          >
            <Image unoptimized className="cursor-pointer rounded-xl" src={logo} width={40} height={40} alt="logo" />
            <span className="ml-2 text-xl font-bold text-black">前端小菜馆</span>
          </motion.div>
        </ActiveLink>

        {/* pc */}
        <div className="ml-0 hidden md:ml-20 md:block">
          <div className="ml-10 flex items-baseline space-x-12">
            <MenuList />
          </div>
        </div>
        {/* mobile */}

        <div className="flex flex-1 justify-end md:hidden">
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
            <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="absolute right-0 top-20 w-full bg-white bg-opacity-88 backdrop-blur-md shadow-sm"
            >
              <div className="flex flex-col justify-start pl-3 pb-3">
                <MenuList />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
