import { FC } from 'react'

interface Props {}

const Header: FC<Props> = props => {
  return (
    <div className="flex h-12 w-full items-center justify-center bg-white">
      <div className="cursor-pointer px-4 py-2 text-base ">菜单</div>
    </div>
  )
}

export default Header
