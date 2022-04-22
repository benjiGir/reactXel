import { on } from 'events';
import { useState } from 'react'

import { useColorStore } from '../../store/store'

import './pixel.scss'

interface IPixel {
    x: number;
    y: number;
    color: string
}

function Pixel({ x, y, color }: IPixel): JSX.Element {
  const [ currentColor, setCurrentColor ] = useState<string>()
  const [ opacity, setOpacity ] = useState<number>()
  const paintColor = useColorStore((state) => state.paintColor)

  const setColor = () => {
    setCurrentColor(paintColor)
    setOpacity(1)
  }

  const eraseColor = () => {
    setOpacity(0)
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

  return (
    <>
      <div
        className='pixel'
        style={{
          boxShadow: `${x}rem ${y}rem 0 -0.05rem ${color}`
        }}
      />
      <div 
        className='pixel hover-pixel'
        style={{
          top: `${y}rem`,
          left: `${x}rem`,
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