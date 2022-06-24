import { useEffect } from 'react'
import Script from 'next/script.js'
const L2DWidget = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const isMobile = document.body.clientWidth < 768
      console.log('isMobile', isMobile)
      window.L2Dwidget.on('*', (name: string) => {
        console.log('%c EVENT ' + '%c -> ' + name, 'background: #222; color: yellow', 'background: #fff; color: #000')
      }).init({
        dialog: {
          // 开启对话框
          enable: true,
          script: {
            'tap body': '哎呀！别碰我！',
            'tap face': '人家是在认真记录生活哦！',
          },
        },
        display: isMobile
          ? {
              position: 'right',
              width: 140,
              height: 280,
              hOffset: 0,
              vOffset: 0,
            }
          : {
              position: 'right',
              width: 200,
              height: 400,
              hOffset: 0,
              vOffset: 0,
            },
        model: { jsonPath: '/live2d-widget/model-haru01/assets/haru01.model.json' },
        mobile: { show: true, scale: 1 },
      })
      return () => clearTimeout(timer)
    }, 1200)
  }, [])

  return <Script src="/live2d-widget/L2Dwidget.min.js"></Script>
}

export default L2DWidget
