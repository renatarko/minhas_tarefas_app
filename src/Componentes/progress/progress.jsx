import { useContext, useEffect, useState } from "react";
import { FaBars, FaGrav } from "react-icons/fa";
import { TaskContext } from "../../context/TaskProvider";

export const Progress = () => {
  const [percent, setPercent] = useState({
    perDo: 0,
    perDoing: 0,
    perDone: 0,
  });
  const [openProgress, setOpenProgress] = useState(true);
  const { todo, doing, done } = useContext(TaskContext);

  const calculatorOfProgress = () => {
    const total = todo.length + doing.length + done.length;

    const todoPercent = (todo.length * 100) / total;
    const doingPercent = (doing.length * 100) / total;
    const donePercent = (done.length * 100) / total;

    if (total === 0) {
      return setPercent({
        perDo: 0,
        perDoing: 0,
        perDone: 0,
      });
    }

    return setPercent({
      perDo: todoPercent,
      perDoing: doingPercent,
      perDone: donePercent,
    });
  };

  useEffect(() => {
    calculatorOfProgress();
  }, [todo, doing, done]);

  const modalStyle = {
    opacity: openProgress ? 1 : 0,
    pointerEvents: "auto",
    zIndex: 10,
  };
  const menuStyle = {
    color: openProgress ? "rgba(155, 0, 255, 1)" : "white",
  };

  return (
    <>
      <button
        className="open-progress"
        onClick={() => setOpenProgress(!openProgress)}
      >
        <FaBars size={25} style={menuStyle} />
      </button>
      <table className="container-progress" style={modalStyle}>
        <h4>Seu progresso</h4>

        <tr className="content-progress">
          <td className="task-name">Para fazer</td>
          <td
            className="barra-progress"
            style={{ borderColor: "#7002b9", borderLeftWidth: percent.perDo }}
          ></td>
          <td className="percent">{percent.perDo}%</td>
        </tr>

        <tr className="content-progress">
          <td className="task-name">Iniciado</td>
          <td
            className="barra-progress"
            style={{
              borderColor: "#f3cf06",
              borderLeftWidth: percent.perDoing,
            }}
          ></td>
          <td className="percent">{percent.perDoing}%</td>
        </tr>

        <tr className="content-progress">
          <td className="task-name">Finalizado</td>
          <td
            className="barra-progress"
            style={{ borderLeftWidth: percent.perDone, borderColor: "#01be0a" }}
          ></td>
          <td className="percent">{percent.perDone}%</td>
        </tr>
      </table>
    </>
  );
};
