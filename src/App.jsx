import React from "react";
import "./style.css";

import { Header } from "./Componentes/header/header";
import { Cards } from "./Componentes/cards/cards";

export const App = () => {
  return (
    <div className="App">
      <main className="main">
        <p className="me">Feito com ♥️ por &#64;renata_rko</p>
        <Header />

        <section className="container-box">
          <Cards />
        </section>
      </main>
    </div>
  );
};
