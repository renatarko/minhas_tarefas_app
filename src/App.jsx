import React from 'react'
import "./style.css"

import { Header } from "./Componentes/header/header"
import { Cards } from "./Componentes/cards/cards"


export const App = () => {
  
  const [newTask, setNewTask] = React.useState("")
  const [addTask, setAddTask] = React.useState("")


  const handleTask = () => {
    setNewTask("")
    setAddTask(newTask)
    console.log(newTask)
  }


  return (
    <div className="App">
      <div className="main">

        <Header newTask={newTask} setNewTask={setNewTask} handleTask={handleTask} />

        <section className="container-box">
          <Cards newTask={addTask} />
        </section>
      </div>
    </div>
  )
}

