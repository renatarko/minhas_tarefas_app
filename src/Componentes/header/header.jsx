import "./style.css";

export const Header = ({ newTask, setNewTask, handleTask }) => {
  return (
    <>
      <div className="header-title">
        <label className="title">Tarefas do dia</label>
        <div className="container-input">
          <input
            className="input-add"
            type="text"
            value={newTask}
            placeholder="Adcione sua tarefa"
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button draggable="true" className="button-add" onClick={handleTask}>
            Adcionar
          </button>
        </div>
      </div>
    </>
  );
};
