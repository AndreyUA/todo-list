import React from "react";

import "./Alert.scss";

const Alert = (props) => {
  return (
    <div className={props.alert ? "alert alert-active" : "alert"}>
      <p className="alert-txt">
        {props.message === "add"
          ? "Task created!"
          : props.message === "done"
          ? "Task done!"
          : null}
      </p>
    </div>
  );
};

export default Alert;
