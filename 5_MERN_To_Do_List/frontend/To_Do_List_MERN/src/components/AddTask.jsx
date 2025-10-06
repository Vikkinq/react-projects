import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    task: "",
    description: "",
    deadline: "",
    completed: false,
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Submitting Form: ${formData}`);
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); // parse response
      console.log("✅ Success:", data);

      navigate("/"); // redirect after success
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="task" placeholder="Task Name" value={formData.task} onChange={handleChange} />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}
