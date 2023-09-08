import React from "react";
import { TaskContext } from "../../context/TaskProvider";
import { Time } from "./time";
import { BsPlusSquareFill } from "react-icons/bs";
import "./style.css";

export const Header = () => {
  const [task, setTask] = React.useState("");

  const { createTask } = React.useContext(TaskContext);

  const handleClick = () => {
    createTask(task);
    setTask("");
  };

  function showHeaderOnRespo() {
    const header = document.querySelector(".header-title");
    header.classList.toggle("show");
  }
  return (
    <header className="header-title">
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
          Adcionar
        </button>
      </div>
      {/* <div className="container-textfield">
        <p>Prioridade</p>
        <label htmlFor="todo">
          <span>Baixa</span>
          <input type="checkbox" name="low" id="todo" />
        </label>
        <label htmlFor="todoing">
          <span>Média</span>
          <input type="checkbox" name="medium" id="todoing" />
        </label>
        <label htmlFor="todone">
          <span>Alta</span>
          <input type="checkbox" name="high" id="todone" />
        </label>
      </div> */}
      <BsPlusSquareFill className="icon-plus" onClick={showHeaderOnRespo} />
    </header>
  );
};
