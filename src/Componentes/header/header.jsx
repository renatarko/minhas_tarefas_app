import React from "react";
import { TaskContext } from "../../context/TaskProvider";
import { Time } from "./time";
import "./style.css";

export const Header = () => {
  const [task, setTask] = React.useState("");

  const { createTask } = React.useContext(TaskContext);

  const handleClick = () => {
    createTask(task);
    setTask("");
  };

  return (
    <>
      <div className="header-title">
        <h1 className="title">
          Tarefas do dia - <Time />
        </h1>
        <div className="header-input">
          <input
            className="input-add"
            type="text"
            value={task}
            placeholder="Digite sua tarefa"
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="button-add" onClick={handleClick}>
            Criar
          </button>
        </div>
      </div>
    </>
  );
};
