import { useState, useEffect } from "react";

import TaskList from "./TaskList";
import AddButton from "../components/AddButton";

export default function Task() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    try {
      const fetchTasks = async () => {
        try {
          const res = await fetch("/api/tasks");
          const taskData = await res.json();
          setTask(taskData);
        } catch (err) {
          console.error("Failed to fetch tasks:", err);
        }
      };
      fetchTasks();
    } catch (err) {
      console.log("Error has Occured: ", err);
    }
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
