import React, { useEffect, useState } from "react";

import "./App.scss";
import TaskBar from "./TaskBar";
import Alert from "./Alert";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(tasks.length + 1);

    if (text.length === 0) {
      return;
    }

    const newTask = {
      txt: text,
      id: `${count}-${text}`,
    };

    setTasks(tasks.concat(newTask));

    setText("");

    //const input = document.querySelector('.input').blur();
  };

  const handleTaskDelete = (e) => {
    e.preventDefault();

    console.log(e.target);
    console.log(tasks);
    console.log(tasks.filter((task) => task.id !== e.target.value));

    //добавить отложенный старт
    setTasks(tasks.filter((task) => task.id !== e.target.value));

    setCount(tasks.length - 1);
  };

  const handleTaskDone = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
      <Alert alert={alert} />
      <header>
        <p className="header-txt">
          You have <span className="header-count">{count}</span> tasks
        </p>
      </header>

      <TaskBar
        tasks={tasks}
        delete={handleTaskDelete}
        alert={alert}
        setAlert={setAlert}
      />

      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter new task"
            onChange={handleChange}
            value={text}
          />
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
