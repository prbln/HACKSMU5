import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const Notify = () => {
  const [open, setOpen] = useState(false);
  const [assignee, setAssignee] = useState("");
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNotify = () => {
    // Here, you can handle the notification logic, such as sending the data to a server or displaying it.
    alert(`Urgent Task Email sent to ${assignee}.`);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Notify Urgent Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Notify Urgent Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details for the urgent task:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="assignee"
            label="Assignee"
            type="text"
            fullWidth
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
          <TextField
            margin="dense"
            id="task"
            label="Task"
            type="text"
            fullWidth
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleNotify} color="primary">
            Notify
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Notify;
