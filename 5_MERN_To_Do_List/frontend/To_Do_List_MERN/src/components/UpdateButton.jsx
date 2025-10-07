import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function UpdateButton({ taskId }) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(`/${taskId}/update`)} size="small">
      Update
    </Button>
  );
}
