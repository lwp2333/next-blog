import { FC } from 'react'

interface LinkItem {
  label: string
  url: string
}
interface Props {
  linkList?: { title: string; children: LinkItem[] }[]
}

const Footer: FC<Props> = ({ linkList = [] }) => {
  return (
    <footer className="fixed left-0 bottom-0 flex h-48  w-screen  items-center justify-center bg-[#303846] px-12">
      {linkList.map((item, x) => {
        return (
          <dl className="w-80" key={x}>
            <dt className="mb-3 text-base text-slate-300">{item.title}</dt>
            {item.children.map((link, y) => {
              return (
                <dd className="text-sm leading-7 text-slate-100" key={y}>
                  <a target="blank" href={link.url}>
                    {link.label}
                  </a>
                </dd>
              )
            })}
          </dl>
        )
      })}
    </footer>
  )
}

Footer.defaultProps = {
  linkList: [
    {
      title: '相关资料',
      children: [
        {
          label: 'react',
          url: 'https://react.docschina.org',
        },
        {
          label: 'nextjs',
          url: 'https://www.nextjs.cn',
        },
        {
          label: 'tailwindcss',
          url: 'https://tailwindcss.com/',
        },
      ],
    },
    {
      title: '关于我',
      children: [
        {
          label: 'github',
          url: 'https://github.com/lwp2333',
        },
        {
          label: '语雀',
          url: 'https://www.yuque.com/lwp2333',
        },
        {
          label: '掘金',
          url: 'https://juejin.cn/user/4371313964352327',
        },
      ],
    },
  ],
}

export default Footer
