import React from "react";
import "./style.css";

import { Header } from "./Componentes/header/header";
import { Cards } from "./Componentes/cards/cards";
import { Progress } from "./Componentes/progress/progress";

export const App = () => {
  return (
    <main className="main">
      <p className="me">Feito com ♥️ por &#64;renata_rko</p>
      <h3
        style={{
          position: "fixed",
          top: "8rem",
          color: "white",
          letterSpacing: "1px",
        }}
      >
        Todo List
      </h3>
      <section className="section">
        <Header />
        <Cards />
      </section>
      <Progress />
    </main>
  );
};
