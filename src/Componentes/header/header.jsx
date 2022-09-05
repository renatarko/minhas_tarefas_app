import "./style.css"

export const Header = ({newTask, setNewTask, handleTask} ) => {
  



  return (
    <>
      <div className="header-title">
        <h1 className="title">Tarefas do dia</h1>
        <input className="input-add" type="text" value={newTask}
          placeholder="Adcione sua tarefa"
          onChange={(e) => setNewTask(e.target.value)} />
        <button className="button-add" onClick={handleTask}>Adcionar</button>
      
      </div>
    </>
  )
}