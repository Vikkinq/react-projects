import { useState, useEffect } from "react";

import TaskList from "./TaskList";
import AddButton from "../components/AddButton";

export default function Task() {
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
        <AddButton />
        {task.map((t) => (
          <TaskList key={t._id} {...t} />
        ))}
      </div>
    </>
  );
}
