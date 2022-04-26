import { useEffect, useState } from 'react'
import { useGridStore } from '../../store/store'
import Row from '../Row/Row'

import './grid.scss'

function Grid(): JSX.Element {
  const [ rows, setRows ] = useState<Array<JSX.Element>>([])
  const y = useGridStore((state) => state.y)

  useEffect(() => {
    const grid: typeof rows = []

    for (let i = 0; i < y; i++) {
      grid.push(<Row key={i} />)
    }

    setRows(grid)
  }, [y])

  return (
    <div className='grid'>
      {rows}
    </div>
  )
}

export default Grid