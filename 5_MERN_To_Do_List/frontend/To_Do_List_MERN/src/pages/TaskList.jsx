import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import UpdateButton from "../components/UpdateButton";

export default function TaskList({ id, task, description, deadline, completed, taskDelete }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {task}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        {completed === false ? <p>Incomplete</p> : <p>Completed</p>}
        <h6>{deadline}</h6>
      </CardContent>
      <CardActions>
        <UpdateButton taskId={id} />
        <Button size="small" onClick={() => taskDelete(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
