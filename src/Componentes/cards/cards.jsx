import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./style.css";

import Draggable from "react-draggable";

export const Cards = ({ newTask }) => {
  const [toDo, setToDo] = useState([]);
  const [toDoing, setToDoing] = useState([]);
  const [toDone, setToDone] = useState([]);

  // const handleTask = () => {
  //   setToDo([...toDo, newTask])
  //   setNewTask("")
  //   console.log(toDo)
  // }

  React.useEffect(() => {
    if (newTask.trim() !== "") {
      setToDo([...toDo, newTask]);
    }
  }, [newTask]);

  const moveToDoing = (task) => {
    let index = toDo.indexOf(task);
    toDo.splice(index, 1);
    setToDoing([...toDoing, task]);
    console.log(toDoing);
  };

  const moveToDone = (task) => {
    let index = toDoing.indexOf(task);
    toDoing.splice(index, 1);
    setToDoing(...toDoing.filter((item) => item !== task));
    setToDone([...toDone, task]);
  };

  const deleteTaskToDo = (task) => {
    const arrayFilterToDo = toDo.filter((valorAtual) => {
      return valorAtual !== task;
    });
    setToDo([...arrayFilterToDo]);
  };

  const deleteTaskToDoing = (task) => {
    let index = toDoing.indexOf(task);
    toDoing.splice(index, 1);
    setToDo([...toDoing]);
  };

  const deleteTaskToDone = (task) => {
    const arrayFilterToDone = toDone.filter((valorAtual) => {
      return valorAtual !== task;
    });
    setToDone([...arrayFilterToDone]);
    // setToDone(...toDone.filter( item  => item !== task))
    console.log(arrayFilterToDone);
  };

  return (
    <>
      <div className="box-work">
        <div className="box-title">
          <p className="p-title">Tarefas para fazer!</p>

          <Draggable axis="x" bounds="parent">
            <div className="result">
              {toDo.map((task) => (
                <div className="result-work" key={task}>
                  <span>{task}</span>
                  <div className="container-icons">
                    <FaChevronRight
                      className="icon-arrow"
                      onClick={() => moveToDoing(task)}
                    />
                    <AiOutlineCloseCircle
                      className="icon-close"
                      onClick={() => deleteTaskToDo(task)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Draggable>
        </div>
      </div>

      <div className="box-work">
        <div className="p-title">Tarefas em Andamento</div>
        <div className="result">
          {toDoing.map((task) => (
            <div draggable="true" className="result-work" key={task}>
              <span>{task}</span>
              <div className="container-icons">
                <FaChevronRight
                  className="icon-arrow"
                  onClick={() => moveToDone(task)}
                />
                <AiOutlineCloseCircle
                  className="icon-close"
                  onClick={() => deleteTaskToDoing(task)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="box-work">
        <p className="p-title">Tarefas Finalizadas!</p>
        <div className="result">
          {toDone.map((task) => (
            <div className="result-work" key={task}>
              <span>{task}</span>
              <div className="container-icons">
                <AiOutlineCloseCircle
                  className="icon-close"
                  onClick={() => deleteTaskToDone(task)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
