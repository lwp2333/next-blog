import { FC } from 'react'
import logo from '@/assets/svg/rocket.svg'
import Image from 'next/image'
interface Props {}

const Header: FC<Props> = props => {
  return (
    <header className="fixed top-0 left-0 flex h-12 w-full items-center justify-start bg-[#303846] px-4 sm:px-8">
      <Image src={logo} width={32} height={32} alt="logo" />
    </header>
  )
}

export default Header
