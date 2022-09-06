import React,{  useState, useContext } from "react"
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./style.css"
import { TaskContext } from '../../context/TaskProvider'

export const Cards = () => {
  
  const { newTask } = useContext(TaskContext);

  const [todo, setToDo] = useState([])
  const [doing, setDoing] = useState([])
  const [done, setDone] = useState([])

  React.useEffect(() => {
    if (newTask && newTask.trim() !== "") {
           setToDo([...todo, newTask])
    }
    
  }, [newTask]);

  const moveToDoing = (task) => {
    let index = todo.indexOf(task)
    todo.splice(index, 1)
    setDoing([...doing, task])

  }

  const moveToDone = (task) => {
    let index = doing.indexOf(task)
    doing.splice(index, 1)
    // setDoing(...doing.filter(item => item !== task))
    setDone([...done, task])
  }

  const deleteTaskToDo = (task) => {
    setToDo([...todo.filter((item) => item !== task)])
  }

  const deleteTaskDoing = (task) => {
   let arrayFilterDoing = doing.filter((item) => item !== task )
    setDoing([...arrayFilterDoing])
  }

  const deleteTaskDone = (task) => {
    let arrayFilter = done.filter((item) => item !== task )
    setDone([...arrayFilter])
  }

  return (
    <>
    <div className="box-work">
      <div className="box-title">
        <p className="p-title">Tarefas para fazer!</p>
      <div className="result"> 
        {todo.map((task, index) =>
        <div className="result-work" key={index}>{task}
        <div className="container-icons">
          <FaChevronRight className="icon-arrow" onClick={() => moveToDoing(task)} />
          <AiOutlineCloseCircle className="icon-close" onClick={() => deleteTaskToDo(task) } />
        </div>
      </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="box-work">
        <div className="p-title">Tarefa em Andamento</div>
        <div className="result">
          {doing.map((task) =>
            <div className="result-work" key={task}>{task}
              <div className="container-icons" >
                <FaChevronRight className="icon-arrow" onClick={() => moveToDone(task)} />
                <AiOutlineCloseCircle className="icon-close" onClick={() => deleteTaskDoing(task) } />
            </div>
            </div>
          )}  
          </div>
          </div>
          <div className="box-work">
        <p className="p-title">Tarefas Finalizadas!</p>
        <div className="result">
          {done.map((task) =>
            <div className="result-work" key={task}>{task}
              <div className="container-icons" >
                <AiOutlineCloseCircle className="icon-close" onClick={() => deleteTaskDone(task) } />
            </div>
            </div>
          )}  
          </div>
          </div>
    </>
  )
}