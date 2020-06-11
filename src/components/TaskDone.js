import React, { useEffect } from "react";

import "./Task.scss";
import "./TaskDone.scss";

const TaskDone = (props) => {
  useEffect(() => {
    const elems = document.querySelectorAll(".task-done");

    elems[elems.length - 1].classList.remove("invisible");
  }, []);

  return (
    <>
      <div className="task-done invisible">
        <span className="task-done-number">{props.number})</span>
        <span
          className="task-done-topic"
          style={{ textDecoration: "line-through" }}
        >{` ${props.task.txt}`}</span>
        <div className="task-control">
          <button
            value={props.task.id}
            className="return"
            onClick={props.retAction}
          >
            &#9850;
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

export default TaskDone;
