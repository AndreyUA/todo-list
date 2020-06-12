import React from "react";

import "./TaskBar.scss";
import Task from "./Task";
import TaskDone from "./TaskDone";

const TaskBar = (props) => {
  return (
    <div className="tasks tasks-scroll">
      {props.tasks.map((task, i) => (
        <Task
          key={i}
          task={task}
          doneAction={props.doneAction}
          delAction={props.delAction}
          alert={props.alert}
          setAlert={props.setAlert}
          number={i + 1}
        />
      ))}
      {props.done.length > 0 ? (
        <p className="done-txt" style={{ textAlign: "center" }}>
          Done:
        </p>
      ) : null}

      {props.done.map((task, i) => (
        <TaskDone
          key={i}
          task={task}
          delAction={props.delAction}
          retAction={props.retAction}
          alert={props.alert}
          setAlert={props.setAlert}
          number={i + 1}
        />
      ))}
    </div>
  );
};

export default TaskBar;
