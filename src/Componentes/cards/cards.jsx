import React, { useState, useContext } from "react";
import { FaChevronRight } from "react-icons/fa";
import { HiCheck, HiChevronDown, HiX } from "react-icons/hi";
import { TaskContext } from "../../context/TaskProvider";
import { Time } from "../header/time";
import "./style.css";

const storeRemoveTodo = (todo) => {
  localStorage.setItem("todo", JSON.stringify(todo));
};

const storeDoing = (doing) => {
  localStorage.setItem("doing", JSON.stringify(doing));
};

const storeRemoveDoing = (doing) => {
  localStorage.setItem("doing", JSON.stringify(doing));
};

const storeDone = (done) => {
  localStorage.setItem("done", JSON.stringify(done));
};

export const Cards = () => {
  const { newTask } = useContext(TaskContext);

  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

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
      console.log(newTask);
      localStorage.setItem("todo", JSON.stringify([...todo, newTask]));
    }
  }, [newTask]);

  const moveToDoing = (task) => {
    let filteredMovedToDoing = todo.filter((item) => item !== task);
    setTodo(filteredMovedToDoing);
    setDoing([...doing, task]);
    storeRemoveTodo(filteredMovedToDoing);
    storeDoing([...doing, task]);
  };

  const moveToDone = (task) => {
    let filteredMovedToDone = doing.filter((item) => item !== task);
    setDoing(filteredMovedToDone);
    setDone([...done, task]);
    storeRemoveDoing(filteredMovedToDone);
    storeDone([...done, task]);
  };

  const deleteTaskToDo = (task) => {
    let filteredTodo = todo.filter((item) => item !== task);
    setTodo(filteredTodo);
    localStorage.setItem("todo", JSON.stringify(filteredTodo));
  };

  const deleteTaskDoing = (task) => {
    let filteredDoing = doing.filter((item) => item !== task);
    setDoing(filteredDoing);
    localStorage.setItem("doing", JSON.stringify(filteredDoing));
  };

  const deleteTaskDone = (task) => {
    let filtedDone = done.filter((item) => item !== task);
    setDone(filtedDone);
    localStorage.setItem("done", JSON.stringify(filtedDone));
  };

  const [showBox, setShowBox] = useState({
    do: false,
    doing: false,
    done: false,
  });

  return (
    <>
      <div className="container">
        <div className="p-title">
          <p className="p-works">Tarefas para fazer</p>
          <HiChevronDown
            className="icon-showMore"
            onClick={() => setShowBox({ do: !showBox.do })}
            style={showBox.do ? { transform: "rotate(180deg)" } : ""}
            name="do"
          />
        </div>

        <div
          className="box-work"
          style={showBox.do ? { height: "auto" } : { height: "6rem" }}
        >
          <div className="result">
            {todo.map((task, index) => (
              <div className="result-work" key={index}>
                <span>{task}</span>
                <div className="container-icons">
                  <FaChevronRight
                    className="icon-arrow"
                    onClick={() => moveToDoing(task)}
                  />
                  <HiCheck
                    className="icon-close"
                    onClick={() => deleteTaskToDo(task)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="p-title">
          <p className="p-works">Tarefas em Andamento</p>
          <HiChevronDown
            className="icon-showMore"
            onClick={() => setShowBox({ doing: !showBox.doing })}
            style={showBox.doing ? { transform: "rotate(180deg)" } : ""}
            name="doing"
          />
        </div>
        <div
          className="box-work"
          style={showBox.doing ? { height: "auto" } : { height: "6rem" }}
        >
          <div className="result">
            {doing.map((task, index) => (
              <div className="result-work" key={index}>
                <span>{task}</span>
                <div className="container-icons">
                  <FaChevronRight
                    className="icon-arrow"
                    onClick={() => moveToDone(task)}
                  />
                  <HiCheck
                    className="icon-close"
                    onClick={() => deleteTaskDoing(task)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="p-title">
          <p className="p-works">Tarefas Finalizadas</p>
          <HiChevronDown
            className="icon-showMore"
            name="done"
            onClick={() => setShowBox({ done: !showBox.done })}
            style={showBox.done ? { transform: "rotate(180deg)" } : ""}
          />
        </div>
        <div
          className="box-work"
          style={showBox.done ? { height: "auto" } : { height: "6rem" }}
        >
          <div className="result">
            {done.map((task, index) => (
              <div className="result-work" key={index}>
                <span>{task}</span>
                <div className="container-icons">
                  <HiCheck
                    className="icon-close"
                    onClick={() => deleteTaskDone(task)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
