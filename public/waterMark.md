#### react 页面水印的实现

> 1.为什么选用 svg 而不是 cavans？
>
> 因为 cavans 在高分辨率屏幕下，需要根据 devicePixelRatio 做宽高的适配，不然就会很模糊，而 svg 是矢量图，原生支持各种分辨率，不会产生模糊的情况。

1. ##### 使用示例

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import WaterMarkContent from './components/WaterMarkContent'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <WaterMarkContent>
      <App />
    </WaterMarkContent>
  </React.StrictMode>,
  document.getElementById('root')
)
```

![localhost_3000_.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fabace8d450b4e70ba0af607598b650c~tplv-k3u1fbpfcp-watermark.image)

##### 2.实现过程

- 构造一个水印图
- 将水印图铺满整个容器
- 水印组件：支持子组件内容插槽

构造一个 svg 的水印图

```js
const { text = 'waterMark', fontSize = 16, fillOpacity = '0.2', fillColor = '#000' } = props
const res = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="180px" height="180px" viewBox="0 0 180 180">
        <text x="-100" y="-30" fill='${fillColor}'  transform = "rotate(-35 220 -220)" fill-opacity='${fillOpacity}' font-size='${fontSize}'> ${text}</text>
      </svg>`
```

由上面的代码，我们可以得到一个 svg xml 的字符串，接下来我们将它变成 url 资源

```js
const blob = new Blob([res], {
  type: 'image/svg+xml',
})

const url = URL.createObjectURL(blob)
```

由此，我们就得到了一个 svg 的资源地址，现在我们将它用于 div 的背景图当中

```tsx
<div
  style={{
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${url})`,
    top: 0,
    left: 0,
    zIndex: 999,
    pointerEvents: 'none', //点击穿透
  }}
></div>
```

至此，我们很轻松的得到了一个铺满水印的 div，下面我们将代码整合，并封装成组件。

##### 3.组件代码

```tsx
import React from 'react'
import { ReactNode, useMemo } from 'react'

type svgPropsType = {
  text?: string
  fontSize?: number
  fillOpacity?: number
  fillColor?: string
}
const SvgTextBg = (props: svgPropsType) => {
  const { text = 'waterMark', fontSize = 16, fillOpacity = '0.2', fillColor = '#000' } = props
  const res = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="180px" height="180px" viewBox="0 0 180 180">
        <text x="-100" y="-30" fill='${fillColor}'  transform = "rotate(-35 220 -220)" fill-opacity='${fillOpacity}' font-size='${fontSize}'> ${text}</text>
      </svg>`

  const blob = new Blob([res], {
    type: 'image/svg+xml',
  })

  const url = URL.createObjectURL(blob)

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${url})`,
        top: 0,
        left: 0,
        zIndex: 999,
        pointerEvents: 'none', //点击穿透
      }}
    ></div>
  )
}

type propsType = {
  children?: ReactNode
} & Partial<svgPropsType>

const WaterMarkContent = (props: propsType) => {
  const { text, fontSize, fillOpacity, fillColor } = props

  const memoInfo = useMemo(
    () => ({
      text,
      fontSize,
      fillOpacity,
      fillColor,
    }),
    [text, fontSize, fillOpacity, fillColor]
  )
  return (
    <div style={{ position: 'relative', width: '100%', height: ' 100%' }}>
      {props.children}
      <SvgTextBg {...memoInfo} />
    </div>
  )
}

export default WaterMarkContent
```
