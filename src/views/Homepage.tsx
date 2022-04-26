import Palette from '../ColorPalette/Palette'
import Header from '../components/Header/Header'
import DrawScene from '../DrawScene/DrawScene'

function Homepage(): JSX.Element {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Palette />
        <DrawScene />
      </main>
    </>
  )
}

export default Homepage