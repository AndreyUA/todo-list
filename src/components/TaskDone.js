import React, { useEffect } from "react";

import "./Task.scss";
import "./TaskDone.scss";

const TaskDone = (props) => {
  //нужно разобраться, почему не сбрасывает интервал
  //а еще тут сейчас ошибка. разберусь уже в другой раз
  useEffect(() => {
    const elems = document.querySelectorAll(".task-done");

    let turnVisible = setInterval(
      () => elems.lastChild.classList.remove("invisible"),
      3000
    );

    return () => {
      clearInterval(turnVisible);
    };
  }, []);

  return (
    <>
      <div className="task-done">
        <span className="task-done-number">{props.number})</span>
        <span
          className="task-done-topic"
          style={{ textDecoration: "line-through" }}
        >{` ${props.task.txt}`}</span>
      </div>
    </>
  );
};

export default TaskDone;
