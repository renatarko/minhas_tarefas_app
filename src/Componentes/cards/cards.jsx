import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskProvider";
import { Card } from "../card";
import "./style.css";

export const Cards = () => {
  const { newTask, todo, setTodo, doing, setDoing, done, setDone } =
    useContext(TaskContext);

  React.useEffect(() => {
    const _todo = JSON.parse(localStorage.getItem("todo"));
    const _doing = JSON.parse(localStorage.getItem("doing"));
    const _done = JSON.parse(localStorage.getItem("done"));
    if (_todo) {
      setTodo(_todo);
    }
    if (_doing) {
      setDoing(_doing);
    }
    if (_done) {
      setDone(_done);
    }
  }, []);

  React.useEffect(() => {
    if (newTask && newTask.trim() !== "") {
      setTodo([...todo, newTask]);
      localStorage.setItem("todo", JSON.stringify([...todo, newTask]));
    }
  }, [newTask]);

  return (
    <>
      {!todo.length && !doing.length && !done.length ? (
        <section className="msg-empty">
          <p>Vamos começar!</p>
          <p>Crie sua primeira tarefa! &#9997;</p>
        </section>
      ) : (
        <section className="cards-container">
          <Card title="Fazer" tasks={todo} />
          <Card title="Fazendo" tasks={doing} />
          <Card title="Feito" tasks={done} />
        </section>
      )}
    </>
  );
};
