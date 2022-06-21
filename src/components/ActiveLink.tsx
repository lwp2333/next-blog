import { useRouter } from 'next/router'
import { FC, ReactNode, useMemo } from 'react'

interface Props {
  href: string
  children: ReactNode
  replace?: boolean
  className?: string
  activeColor?: string
}

const ActiveLink: FC<Props> = ({ children, href, replace = false, className, activeColor = '#4f46e5' }) => {
  const router = useRouter()
  const handleClick = (e: any) => {
    e.preventDefault()
    replace ? router.replace(href) : router.push(href)
  }

  const styleFill = useMemo(() => {
    return {
      color: router.asPath === href ? activeColor : 'rgba(0, 0, 0, 0.64)',
    }
  }, [activeColor, href, router.asPath])

  return (
    <a href={href} onClick={handleClick} className={className} style={styleFill}>
      {children}
    </a>
  )
}

export default ActiveLink
