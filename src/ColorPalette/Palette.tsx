import { Rnd } from "react-rnd"

import './palette.scss'

function Palette(): JSX.Element {
  return (
    <Rnd
      className="palette"
      default={{
        x: 1150,
        y: 100,
        width: 250,
        height: 500
      }}
      bounds="parent"
    >
      <div className="paletteHeader"></div>
      <div className="paletteContainer">
        <div className="paletteColors"></div>
        <div className="paletteFooter">
          <div className="selectedColor"></div>
          <button className="btnAddColor">+</button>
        </div>
      </div>
    </Rnd>
  )
}

export default Palette