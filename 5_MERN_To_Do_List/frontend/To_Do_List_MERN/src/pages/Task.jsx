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

  const handleDelete = async (id) => {
    await fetch(`/api/task/${id}`, { method: "DELETE" });
    setTask((prev) => prev.filter((t) => t._id !== id)); // update UI
  };

  return (
    <>
      <div>
        <AddButton />
        {task.map((t) => (
          <TaskList key={t._id} {...t} id={t._id} taskDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}
