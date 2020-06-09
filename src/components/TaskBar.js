import React from "react";

import "./TaskBar.scss";
import Task from "./Task";

const TaskBar = (props) => {

  return (
    <div className="tasks">
      {props.tasks.map((task, i) => (
        <Task
          key={i}
          task={task}
          delete={props.delete}
          alert={props.alert}
          setAlert={props.setAlert}
          number={i + 1}
        />
      ))}
    </div>
  );
};

export default TaskBar;
