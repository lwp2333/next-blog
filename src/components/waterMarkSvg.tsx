import { ReactNode } from 'react'
class propsType {
  text: string = 'watermark'
  fontSize?: number
  fillOpacity?: number
  children?: ReactNode
}

interface svgPropsType {
  text: string
  fontSize: number
  fillOpacity: number
}

const svgText = (props: svgPropsType) => {
  const { text, fontSize, fillOpacity } = props

  return `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300px" height="160px" viewBox="0 0 300 160">
    <text x="-100" y="-30" fill='#000'  transform = "rotate(-35 240 -200)" fill-opacity='${fillOpacity}' font-size='${fontSize}'> ${text}</text>
</svg>`
}
const WaterMarkSvg = (props: propsType) => {
  const { text, fontSize = 14, fillOpacity = 0.2 } = props
  const res = svgText({ text, fontSize, fillOpacity })
  const blob = new Blob([res], {
    type: 'image/svg+xml',
  })
  const url = URL.createObjectURL(blob)
  return (
    <div style={{ position: 'relative', width: '100%', height: ' 100%' }}>
      {props.children}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: ' 100%',
          backgroundImage: `url(${url})`,
          top: 0,
          bottom: 0, // 整体覆盖
          left: 0,
          zIndex: 100,
          pointerEvents: 'none', //点击穿透
        }}
      ></div>
    </div>
  )
}

export default WaterMarkSvg
