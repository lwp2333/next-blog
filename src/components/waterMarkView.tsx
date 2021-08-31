import { ReactNode, useLayoutEffect, useEffect } from 'react'
class propsType {
  text: string = 'watermark'
  size?: number
  imageUrl?: string
  className?: string
  children?: ReactNode
}
// 高分辨率画布
const createCanvasWaterLog = (width: number, height: number, text: string, fontSize: number, ratio?: number) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  canvas.width = width
  canvas.height = height
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = `${fontSize}px sans-serif`
  ctx.fillStyle = 'rgba(184, 184, 184, 0.8)'
  ctx.rotate(-(Math.PI / 180) * 30)
  ctx.fillText(text, width / 2, height / 2)
  return canvas
}

// 将水平铺在背景上
const generateWaterMark = (
  container: string,
  watermark: HTMLCanvasElement | string,
  backgroundSize?: { width: number; height: number }
): void => {
  let bg_url = ''
  if (typeof watermark === 'string') {
    bg_url = watermark
  } else {
    bg_url = watermark.toDataURL()
  }
  const waterMarkDiv = document.getElementsByClassName(container)
  const { width = '100%', height = '100%' } = backgroundSize || {}
  const style = `position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none;background-repeat:repeat;background-image:url('${bg_url}');background-size:${width}px ${height}px`
  Array.from(waterMarkDiv).forEach(node => {
    node.setAttribute('style', style)
    node.setAttribute('class', 'watermark-bg')
  })
}

const WaterMarkView = (props: propsType) => {
  const { text, size = 14, className, imageUrl } = props

  useEffect(() => {
    if (imageUrl) {
      generateWaterMark('watermark_wrapper', imageUrl, { width: 200, height: 200 })
    } else {
      const canvas = createCanvasWaterLog(200, 200, text, size)
      generateWaterMark('watermark_wrapper', canvas)
    }
  }, [text, imageUrl, size])
  return (
    <div style={{ position: 'relative' }} className={`watermark_wrapper ${className ? `${className}` : ''}`}>
      {props.children}
    </div>
  )
}

export default WaterMarkView
