import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateTask() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    task: "",
    description: "",
    deadline: "",
    completed: false,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/task/${id}/update`);
        const data = await res.json();
        setFormData(data);
      } catch (err) {
        console.error("Failed to fetch task:", err);
      }
    };
    fetchData(); // You need to call fetchData here, outside the try
  }, [id]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const res = await fetch(`/api/task/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      navigate("/");
      const data = await res.json(); // parse response
      console.log("✅ Success:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <h1>Update Task</h1>
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
    </div>
  );
}
