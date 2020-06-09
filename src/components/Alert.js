import React from "react";

import "./Alert.scss";

const Alert = (props) => {
  return (
    <div className={props.alert ? "alert alert-active" : "alert"}>
      <p className="alert-txt">Task created!</p>
    </div>
  );
};

export default Alert;
