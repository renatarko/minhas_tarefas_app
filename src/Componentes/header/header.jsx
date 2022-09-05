import React from 'react'
import { TaskContext } from '../../context/TaskProvider'
import "./style.css"

export const Header = () => {
  
  const [task, setTask] = React.useState("")

  const { createTask } = React.useContext(TaskContext);


  return (
    <>
      <div className="header-title">
        <h1 className="title">Tarefas do dia</h1>
        <input className="input-add" type="text" value={task}
          placeholder="Adcione sua tarefa"
          onChange={(e) => setTask(e.target.value)} />
        <button className="button-add" onClick={() => createTask(task)}>Adcionar</button>
      
      </div>
    </>
  )
}