import React from 'react'
import "./style.css"

import { Header } from "./Componentes/header/header"
import { Cards } from "./Componentes/cards/cards"


export const App = () => {
  
  return (
    <div className="App">
      <div className="main">

        <Header />

        <section className="container-box">
          <Cards />
        </section>
      </div>
    </div>
  )
}

