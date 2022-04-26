import { useEffect, useState } from 'react'

import { useColorStore } from '../../store/store'

import './pixel.scss'

interface IPixel {
    color: string
}

function Pixel({ color }: IPixel): JSX.Element {
  const [ currentColor, setCurrentColor ] = useState<string>()
  const [ opacity, setOpacity ] = useState<number>()
  const paintColor = useColorStore((state) => state.paintColor)

  const setColor = () => {
    setCurrentColor(paintColor)
    setOpacity(1)
  }

  const eraseColor = () => {
    setCurrentColor('#fff')
  }

  const onClick = (event: any) => {
    setColor()
    event.preventDefault()
  }

  const onContextMenu = (event: any) => {
    eraseColor()
    event.preventDefault()
  }

  const onMouseOver = (event: any) => {
    if (event.buttons === 0 && opacity === 0) {
      setOpacity(0.18)
    } else if (event.buttons === 1) {
      setColor()
    } else if (event.buttons === 2) {
      eraseColor()
    }
  }

  const onMouseLeave = () => {
    if(opacity === 0.18) {
      eraseColor()
    }
  }

  useEffect(() => {
    setCurrentColor(color)
  }, [])

  return (
    <>
      <div 
        className='pixel'
        style={{
          backgroundColor: currentColor,
          opacity: opacity
        }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        onContextMenu={onContextMenu}
      />
    </>
  )
}

export default Pixel