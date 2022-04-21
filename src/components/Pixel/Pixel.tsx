import React, { useState } from 'react'

interface IPixel {
    x: number;
    y: number;
    color: string
}

function Pixel({ x, y, color }: IPixel): JSX.Element {
  const [ currentColor, setCurrentColor ] = useState()
  const [ oldColor, setOldColor ] = useState()
  const [ opacity, setOpacity ] = useState()

  

  return (
    <div></div>
  )
}

export default Pixel