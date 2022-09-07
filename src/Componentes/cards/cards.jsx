import React,{  useState, useContext } from "react"
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TaskContext } from '../../context/TaskProvider'
import "./style.css"


const storeRemoveTodo = (todo) => {
    localStorage.setItem("todo", JSON.stringify(todo))
}

const storeDoing = (doing) => {
    localStorage.setItem("doing", JSON.stringify(doing))
}

const storeRemoveDoing = (doing) => {
  localStorage.setItem("doing", JSON.stringify(doing))
}

const storeDone = (done) => {
  localStorage.setItem("done", JSON.stringify(done))
}

export const Cards = () => {
  
  const { newTask } = useContext(TaskContext);

  const [todo, setTodo] = useState([])
  const [doing, setDoing] = useState([])
  const [done, setDone] = useState([])

  React.useEffect(() => {
    const _todo = JSON.parse(localStorage.getItem('todo'))
    const _doing = JSON.parse(localStorage.getItem('doing'))
    const _done = JSON.parse(localStorage.getItem('done'))
    if (_todo) {
      setTodo(_todo)
    }
    if (_doing) {
      setDoing(_doing)
    }
    if (_done) {
      setDone(_done)
    }
  },[])

  React.useEffect(() => {
    if (newTask && newTask.trim() !== "") {
      setTodo([...todo, newTask])
      console.log(newTask)
      localStorage.setItem("todo", JSON.stringify([...todo, newTask]))
    }
  }, [newTask]);
  

  const moveToDoing = (task) => {
    let filteredMovedToDoing = todo.filter((item) => item !== task)
    setTodo(filteredMovedToDoing)
    setDoing([...doing, task])
    storeRemoveTodo(filteredMovedToDoing)
    storeDoing([...doing, task]) 
  }

  const moveToDone = (task) => {
    let filteredMovedToDone = doing.filter((item) => item !== task)
    setDoing(filteredMovedToDone)
    setDone([...done, task])
    storeRemoveDoing(filteredMovedToDone)
    storeDone([...done, task]) 
  }

  const deleteTaskToDo = (task) => {
    let filteredTodo = todo.filter((item) => item !== task )
    setTodo(filteredTodo)
    localStorage.setItem("todo", JSON.stringify(filteredTodo)) 
  }

  const deleteTaskDoing = (task) => {
   let filteredDoing = doing.filter((item) => item !== task)
    setDoing(filteredDoing)
    localStorage.setItem("doing", JSON.stringify(filteredDoing)) 
  }

  const deleteTaskDone = (task) => {
    let filtedDone = done.filter((item) => item !== task )
    setDone(filtedDone)
    localStorage.setItem("done", JSON.stringify(filtedDone)) 
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
          {doing.map((task, index) =>
            <div className="result-work" key={index}>{task}
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
        {done.map((task, index) =>
        <div className="result-work" key={index}>{task}
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