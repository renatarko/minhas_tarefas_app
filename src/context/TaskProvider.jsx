import React from 'react'


export const TaskContext = React.createContext()

export const TaskProvider = ({ children }) => {

  const [newTask, setNewTask] = React.useState("")

  const createTask = (task) => { 
    setNewTask(task)
  }

  const value = {
    newTask,
    createTask
  }
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}