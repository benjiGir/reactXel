import React from 'react'
import { Rnd } from 'react-rnd'

import style from './Drawscene.module.scss'

function DrawScene(): JSX.Element {
  return (
    <div>
      <Rnd
        className={style.drawscene}
        default={{
          x: 150,
          y: 205,
          width: 500,
          height: 190,
        }}
        minWidth={500}
        minHeight={190}
        bounds="window"
      >
        TEST
      </Rnd>
    </div>
  )
}

export default DrawScene