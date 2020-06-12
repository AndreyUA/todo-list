import React, { useState, useEffect } from "react";

import "./App.scss";
import TaskBar from "./TaskBar";
import Alert from "./Alert";
import TodoFrom from "./TodoForm";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [done, setDone] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const messageAction = (mes) => {
    setMessage(mes);
    setAlert(true);

    const alertWindow = setTimeout(() => setAlert(false), 1000);

    return () => {
      clearInterval(alertWindow);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = document.querySelector(".form-input");

    if (text.trim().length === 0) {
      setText("");
      input.blur();
      return;
    }

    if (text.length > 40) {
      setText("");
      input.blur();
      messageAction("long");
      return;
    }

    setCount(tasks.length + 1);

    const newTask = {
      txt: text,
      id: `${count}-${text}`,
    };

    setTasks(tasks.concat(newTask));

    setText("");
    messageAction("add");
    input.blur();
  };

  const handleTaskDone = (e) => {
    e.preventDefault();

    setTasks(
      tasks.filter((task) => {
        return task.id !== e.target.value;
      })
    );

    setDone(
      done.concat(
        tasks.filter((task) => {
          return task.id === e.target.value;
        })
      )
    );
    setCount(tasks.length - 1);

    messageAction("done");
  };

  const handleTaskDel = (e) => {
    e.preventDefault();

    setTasks(
      tasks.filter((task) => {
        return task.id !== e.target.value;
      })
    );

    setDone(
      done.filter((task) => {
        return task.id !== e.target.value;
      })
    );

    tasks.forEach((task) => {
      if (task.id === e.target.value) {
        setCount(tasks.length - 1);
      }
    });

    messageAction("del");
  };

  const handleTaskReturn = (e) => {
    e.preventDefault();

    setDone(
      done.filter((task) => {
        return task.id !== e.target.value;
      })
    );

    setTasks(
      tasks.concat(
        done.filter((task) => {
          return task.id === e.target.value;
        })
      )
    );
    setCount(tasks.length + 1);

    messageAction("ret");
  };

  useEffect(() => {
    const delBut = document.querySelectorAll(".delete");

    delBut.forEach((item) =>
      item.addEventListener("click", () => console.log("deleted!"))
    );
  });

  return (
    <div className="wrapper">
      <Alert alert={alert} message={message} />
      <header>
        <p className="header-txt">
          You have <span className="header-count">{count}</span> tasks
        </p>
      </header>

      <TaskBar
        tasks={tasks}
        doneAction={handleTaskDone}
        delAction={handleTaskDel}
        retAction={handleTaskReturn}
        alert={alert}
        setAlert={setAlert}
        done={done}
      />

      <TodoFrom
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        text={text}
      />
    </div>
  );
};

export default App;
