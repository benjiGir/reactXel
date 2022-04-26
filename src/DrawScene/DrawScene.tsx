import React from 'react'
import { Rnd } from 'react-rnd'
import Grid from '../components/Grid/Grid'

import style from './Drawscene.module.scss'

function DrawScene(): JSX.Element {
  return (
    <div className={style.drawscene}>
      <Grid />
    </div>
  )
}

export default DrawScene