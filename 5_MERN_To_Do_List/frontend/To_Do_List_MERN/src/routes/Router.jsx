import { Routes, Route, Link } from "react-router-dom";

import Task from "../pages/Task";
import AddTask from "../components/AddTask";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Task />} />
      <Route path="/add" element={<AddTask />} />
    </Routes>
  );
}
