import { Box, Button, IconButton, Typography } from "@mui/material";
import HistoricData from "./Status";
import Revenue from "./Revenue";
import AssetType from "./AssetType";
import StartDate from "./StartDate";
import Status from "./Status";
import Units from "./Units";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Visualization from "./Visualization";
import Manufacturer from "./Manufacturer";
import { useState } from "react";

export const ChartsComponent = (props) => {
  const [activeChart, setActiveChart] = useState("line"); // Default to Visualization component

  const handleChartChange = (chartType) => {
    setActiveChart(chartType);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        borderRadius={5}
        boxShadow={5}
        sx={{
          margin: 10,
          marginLeft: 13,
          marginRight: 5,
          width: 1300,
          height: 800,
          padding: 10,
          paddingLeft: 0,
          paddingTop: 5,
          bgcolor: "white",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <AssetType />
          <Manufacturer />
          <StartDate />
          <Button
            variant="contained"
            onClick={() => handleChartChange("bar")}
            sx={{
              ml: 2,
              bgcolor: activeChart === "bar" ? "grey" : "rgb(48, 0, 143)",
            }}
          >
            Bar Chart
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChartChange("line")}
            sx={{
              ml: 2,
              bgcolor: activeChart === "line" ? "grey" : "rgb(48, 0, 143)",
            }}
          >
            Line Chart
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChartChange("pie")}
            sx={{
              ml: 2,
              bgcolor: activeChart === "pie" ? "grey" : "rgb(48, 0, 143)",
            }}
          >
            Pie Chart
          </Button>
        </Box>
        {activeChart === "line" && (
          <Visualization sx={{ width: "100%", height: "100%" }} />
        )}
        {activeChart === "bar" && (
          <Revenue sx={{ width: "100%", height: "100%" }} />
        )}
        {activeChart === "pie" && (
          <Units sx={{ width: "100%", height: "100%" }} />
        )}
      </Box>
      <Status sx={{ mr: 4 }} />
    </Box>
  );
};
