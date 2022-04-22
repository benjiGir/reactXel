import { useEffect, useState } from 'react'
import Pixel from '../Pixel/Pixel'

import './grid.scss'


function Grid({ x = 16, y = 16 }): JSX.Element {
  const [ pixels, setPixels ] = useState<Array<JSX.Element>>([])

  useEffect(() => {
    const grid: typeof pixels = []

    for (let i = 1; i < x; i++) {
      for (let j = 1; j < y; j++) {
        grid.push(<Pixel x={i} y={j} color='#fff' />)
      }

      setPixels(grid)
    }
  }, [x, y])

  return (
    <div className='grid'>
      {pixels}
    </div>
  )
}

export default Grid