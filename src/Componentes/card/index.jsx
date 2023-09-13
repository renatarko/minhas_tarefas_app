import { FaCheck, FaChevronRight } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskProvider";
import {
  storeDoing,
  storeDone,
  storeRemoveDoing,
  storeRemoveDone,
  storeRemoveTodo,
} from "../../../utils/functions";

export const Card = ({ title, tasks }) => {
  const { newTask, todo, setTodo, doing, setDoing, done, setDone } =
    useContext(TaskContext);

  const [createdAt, setCreatedAt] = useState("");

  const moveToNextTask = (task) => {
    const isTodo = todo.some((item) => item === task && task);
    if (isTodo) {
      const removingTask = todo.filter((item) => item !== task);
      setTodo(removingTask);
      setDoing([...doing, task]);
      storeDoing([...doing, task]);
      storeRemoveTodo(removingTask);
      return;
    }

    const isToding = doing.some((item) => item === task && task);
    if (isToding) {
      const removingTask = doing.filter((item) => item !== task);
      setDoing(removingTask);
      setDone([...done, task]);
      storeDone([...done, task]);
      storeRemoveDoing(removingTask);
      return;
    }
  };

  const deleteTask = (task) => {
    const removeTask = done.filter((item) => item !== task);
    setDone(removeTask);
    storeRemoveDone(removeTask);
  };

  const newCreatedAt = () => {
    const isoString = new Date().toISOString();
    const dateObject = new Date(isoString);

    let day = dateObject.getDate();
    let month = dateObject.getMonth() + 1;

    if (day.toString().length <= 1 || month.toString().length <= 1) {
      day = `0${day}`;
      month = `0${month}`;
      const data = `${day}/${month}`;
      return setCreatedAt(data);
    }

    const data = `${day}/${month}`;
    setCreatedAt(data);
  };

  useEffect(() => {
    newCreatedAt();
  }, [newTask]);

  const resultStyle = {
    background: !tasks.length ? "red" : "white",
  };

  return (
    <>
      <div className="container">
        <p className="p-works">{title}</p>

        <ul className="result" style={resultStyle}>
          {tasks.length !== 0 &&
            tasks.map((task, index) => (
              <li className="result-work" key={index}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <span>{task}</span>
                  <p
                    className="progress"
                    style={
                      (title === "Fazer" && {
                        background: "#7002b9",
                      }) ||
                      (title === "Fazendo" && {
                        background: "#f3cf06",
                      }) ||
                      (title === "Feito" && {
                        background: "#01be0a",
                      })
                    }
                  />
                  <p style={{ fontSize: "10px", color: "#706e6e" }}>
                    {createdAt}
                  </p>
                </div>
                {title !== "Feito" ? (
                  <FaChevronRight
                    className="icon"
                    onClick={() => moveToNextTask(task)}
                  />
                ) : (
                  <FaCheck
                    className="icon icon-close"
                    onClick={() => deleteTask(task)}
                  />
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
