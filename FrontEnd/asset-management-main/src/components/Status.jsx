import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { Divider } from "@mui/material";

const Status = ({ openProblems = 2, urgentIssues = 0, solvedIssues = 1 }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <IconButton color="primary" aria-label="Open Problems">
          <ReportProblemIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6">{openProblems}</Typography>
        <Typography variant="body2">Open Problems</Typography>
        <Divider
          variant="middle"
          style={{
            margin: "16px 0", // Add margin above and below the divider
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Customize the background color
            height: "2px", // Customize the height of the divider
          }}
        />

        <IconButton color="error" aria-label="Urgent Issues">
          <ErrorOutlineIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6">{urgentIssues}</Typography>
        <Typography variant="body2">Urgent Issues</Typography>
        <Divider
          variant="middle"
          style={{
            margin: "16px 0", // Add margin above and below the divider
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Customize the background color
            height: "2px", // Customize the height of the divider
          }}
        />
        <IconButton color="success" aria-label="Solved Issues">
          <CheckCircleOutlineIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6">{solvedIssues}</Typography>
        <Typography variant="body2">Solved Issues</Typography>
        <Divider
          variant="middle"
          style={{
            margin: "16px 0", // Add margin above and below the divider
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Customize the background color
            height: "2px", // Customize the height of the divider
          }}
        />
        <IconButton color="info" aria-label="In Progress Issues">
          <ScheduleIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6">7</Typography>
        <Typography variant="body2">In Progress Issues</Typography>
        <Divider
          variant="middle"
          style={{
            margin: "16px 0", // Add margin above and below the divider
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Customize the background color
            height: "2px", // Customize the height of the divider
          }}
        />
        <IconButton color="warning" aria-label="Pending Issues">
          <HourglassEmptyIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6">5</Typography>
        <Typography variant="body2">Pending Issues</Typography>
      </Paper>
    </div>
  );
};

export default Status;
