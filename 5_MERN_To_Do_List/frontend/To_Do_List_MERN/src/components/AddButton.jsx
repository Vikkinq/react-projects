import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function AddButton() {
  return (
    <>
      <Link to="/add">
        <Button variant="contained" color="success">
          Add Task
        </Button>
      </Link>
    </>
  );
}
