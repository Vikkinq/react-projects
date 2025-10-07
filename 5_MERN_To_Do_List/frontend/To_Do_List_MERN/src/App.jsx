import { useState, useEffect } from "react";
import "./App.css";

import Task from "./pages/Task";
import Router from "./routes/Router";


function App() {
  return (
    <>
      <div>
        <h1>To Do List</h1>
        <hr />
        <Router />
      </div>
    </>
  );
}

export default App;
