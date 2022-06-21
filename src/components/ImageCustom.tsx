import Image, { ImageProps } from 'next/image'

export default function ImageCustom(props: ImageProps) {
  return <Image unoptimized alt="" {...props} />
}
