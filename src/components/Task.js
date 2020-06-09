import React, { useState, useEffect } from "react";

import "./Task.scss";
import Alert from "./Alert";

const Task = (props) => {
  const [decoration, setDecoration] = useState(false);

  //нужно поработать над тем, чтоб правильно отмечало СДЕЛАННОЕ
  const handleDecoration = (e) => {
    e.preventDefault();
    setDecoration(!decoration);
  };

  useEffect(() => {
    props.setAlert(true);
    let alertWindow = setTimeout(() => props.setAlert(false), 1000);

    return () => {
      clearInterval(alertWindow);
    };
  }, []);

  return (
    <>
      
      <div className="task">
        <span className="task-number">
          {props.number}) 
        </span>
        {decoration ? (
          <span
            className="task-topic"
            style={{ textDecoration: "line-through" }}
          >
            {` ${props.task.txt}`}
          </span>
        ) : (
          <span className="task-topic">{` ${props.task.txt}`}</span>
        )}
        <div className="task-control">
          <button
            value={props.task.id}
            className="done"
            onClick={handleDecoration}
          >
            &#10004;
          </button>
          <button
            value={props.task.id}
            className="delete"
            onClick={props.delete}
          >
            &#10008;
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
