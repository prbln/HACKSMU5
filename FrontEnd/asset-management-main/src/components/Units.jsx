import * as React from "react";
import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 153, label: "Elevator" },
  { id: 1, value: 154, label: "Fire Alarm" },
  { id: 2, value: 161, label: "Plumbing" },
  { id: 3, value: 182, label: "HVAC" },
  { id: 4, value: 154, label: "Panel" },
];

export default function PieActiveArc() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30 },
          },
        ]}
        sx={{
          [`& .${pieArcClasses.faded}`]: {
            fill: "gray",
          },
        }}
        width={600}
        height={600}
      />
    </div>
  );
}
