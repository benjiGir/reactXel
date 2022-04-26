import { useEffect, useState } from "react"

import { useGridStore } from "../../store/store"
import Pixel from "../Pixel/Pixel"

import './row.scss'

function Row(): JSX.Element {
  const [ pixels, setPixels ] = useState<Array<JSX.Element>>()
  const x = useGridStore((state) => state.x)

  useEffect(() => {
    const row: JSX.Element[] = []

    for (let i = 0; i < x; i++) {
      row.push(<Pixel key={i} color='#fff' />)
    }

    setPixels(row)
  },[x])

  return (
    <div className="rowPixels">{pixels}</div>
  )
}

export default Row