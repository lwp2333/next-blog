import { ReactElement } from 'react'
import { Spin } from 'antd'
interface propsType {
  loading: boolean
  error: boolean
  children: ReactElement | string
}

const asyncLoadingView = (props: propsType) => {
  const { loading, error } = props

  if (error) return <>{'error!'}</>
  return (
    <Spin spinning={loading}>
      <>{props.children}</>
    </Spin>
  )
}

export default asyncLoadingView
