import React,{  useState, useContext } from "react"
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./style.css"
import { TaskContext } from '../../context/TaskProvider'

export const Cards = () => {
  
  const {newTask} = useContext(TaskContext);  

  const [toDo, setToDo] = useState([])
  const [toDoing, setToDoing] = useState([])
  const [toDone, setToDone] = useState([])

  React.useEffect(() => {
    if (newTask && newTask.trim() !== "") {
           setToDo([...toDo, newTask])
    }
   
  }, [newTask]);


  const moveToDoing = (task) => {
    let index = toDo.indexOf(task)
    toDo.splice(index, 1)
    setToDoing([...toDoing, task])
    console.log(toDo)
  }

  const moveToDone = (task) => {
    let index = toDoing.indexOf(task)
    toDoing.splice(index, 1)
    setDoing(...toDoing.filter(item => item !== task))
    setToDone([...toDone, task])
  }

  const deleteTaskToDo = (task) => {
    const arrayFilterToDo = toDo.filter((valorAtual) => {
     return valorAtual !== task
    })
    setToDo([...arrayFilterToDo])
  }

  const deleteTaskToDoing = (task) => {
   let index = toDoing.indexOf(task)
    toDoing.splice(index, 1)
    setToDo([...toDoing])
  }

  const deleteTaskToDone = (task) => {
   const arrayFilterToDone = toDone.filter((valorAtual) => {
     return valorAtual !== task
    })
    setToDone([...arrayFilterToDone])
    // setToDone(...toDone.filter( item  => item !== task))
    console.log(arrayFilterToDone)
  }

  return (
    <>
    <div className="box-work">
      <div className="box-title">
        <p className="p-title">Tarefas para fazer!</p>
        {/* <input className="input-add" type="text" value={newTask} placeholder="Adcione sua tarefa" onChange={(e) => setNewTask(e.target.value) } />
        <button className="button-add" onClick={handleTask}>Adcionar</button> */}
      <div className="result"> 
        {toDo.map((task) =>
        <div className="result-work" key={task}>{task}
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
          {toDoing.map((task) =>
            <div className="result-work" key={task}>{task}
              <div className="container-icons" >
                <FaChevronRight className="icon-arrow" onClick={() => moveToDone(task)} />
                <AiOutlineCloseCircle className="icon-close" onClick={() => deleteTaskToDoing(task) } />
            </div>
            </div>
          )}  
          </div>
          </div>
          <div className="box-work">
        <p className="p-title">Tarefas Finalizadas!</p>
        <div className="result">
          {toDone.map((task) =>
            <div className="result-work" key={task}>{task}
              <div className="container-icons" >
                <AiOutlineCloseCircle className="icon-close" onClick={() => deleteTaskToDone(task) } />
            </div>
            </div>
          )}  
          </div>
          </div>
    </>
  )
}