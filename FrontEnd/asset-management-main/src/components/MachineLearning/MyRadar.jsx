import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Elevator",
    A: 100,
    fullMark: 150,
  },
  {
    subject: "Panel",
    A: 98,
    fullMark: 150,
  },
  {
    subject: "Plumbing",
    A: 86,
    fullMark: 150,
  },

  {
    subject: "HVAC",
    A: 85,
    fullMark: 150,
  },
  {
    subject: "Fire Alarm",
    A: 65,
    fullMark: 150,
  },
];

export default class MyRadar extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-radar-chart-rjoc6";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
