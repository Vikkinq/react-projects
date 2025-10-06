import { useState, useEffect } from "react";
import "./App.css";

import Task from "./components/Task";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((taskData) => {
        setTask(taskData);
      });
  }, []);

  return (
    <>
      <div>
        <h1>To Do List</h1>
        <hr />
        {task.map((t) => (
          <Task key={t.id} {...t} />
        ))}
      </div>
    </>
  );
}

export default App;
