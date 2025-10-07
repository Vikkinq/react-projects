import { Routes, Route, Link } from "react-router-dom";

import Task from "../pages/Task";
import AddTask from "../pages/AddTask";
import UpdateTask from "../pages/UpdateTask";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Task />} />
      <Route path="/add" element={<AddTask />} />
      <Route path="/:id/update" element={<UpdateTask />} />
    </Routes>
  );
}
