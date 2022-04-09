import React from 'react'
import Header from '../components/Header/Header'
import DrawScene from '../DrawScene/DrawScene'

function Homepage(): JSX.Element {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <DrawScene></DrawScene>
      </main>
    </>
  )
}

export default Homepage