import React from "react";

import "./TodoForm.scss";

const TodoFrom = (props) => {
  return (
    <div className="form-container">
      <form className="form-place" onSubmit={props.handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Enter new task"
          onChange={props.handleChange}
          value={props.text}
        />
        <button className="form-button">ADD</button>
      </form>
    </div>
  );
};

export default TodoFrom;
