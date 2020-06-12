import React from "react";

import "./Alert.scss";

const Alert = (props) => {
  return (
    <div className={props.alert ? "alert alert-active" : "alert"}>
      <p className="alert-txt">
        {props.message === "add"
          ? "Task added!"
          : props.message === "done"
          ? "Task done!"
          : props.message === "del"
          ? "Task deleted!"
          : props.message === "ret"
          ? "Task returned!"
          : props.message === "long"
          ? "Task is too long!"
          : null}
      </p>
    </div>
  );
};

export default Alert;
