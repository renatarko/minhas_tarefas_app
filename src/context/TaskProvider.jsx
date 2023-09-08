import React from "react";

export const TaskContext = React.createContext();

export const TaskProvider = ({ children }) => {
  const [newTask, setNewTask] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  const [doing, setDoing] = React.useState([]);
  const [done, setDone] = React.useState([]);

  const createTask = (task) => {
    setNewTask(task);
  };

  const value = {
    newTask,
    createTask,
    todo,
    setTodo,
    doing,
    setDoing,
    done,
    setDone,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => {
  const context = React.useContext(TaskContext);

  if (!context) {
    throw new Error("Use Task precisa estar dentro do Provider");
  }
  return context;
};
