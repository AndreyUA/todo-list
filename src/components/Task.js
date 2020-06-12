import React, { useEffect } from "react";

import "./Task.scss";

const Task = (props) => {
  useEffect(() => {
    props.setAlert(true);
    let alertWindow = setTimeout(() => props.setAlert(false), 1000);

    return () => {
      clearInterval(alertWindow);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll(".task");

    elems[elems.length - 1].classList.remove("invisible");
  }, []);

  return (
    <>
      <div className="task invisible">
        <div className="task-txt">
          <span className="task-number">{props.number})</span>
          <span className="task-topic">{` ${props.task.txt}`}</span>
        </div>
        <div className="task-control">
          <button
            value={props.task.id}
            className="done"
            onClick={props.doneAction}
          >
            &#10004;
          </button>

          <button
            value={props.task.id}
            className="delete"
            onClick={props.delAction}
          >
            &#10008;
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
