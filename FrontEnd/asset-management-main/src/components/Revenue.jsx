import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const manufacturer = [5, 1, 3, 2, 5, 3, 2, 4, 5, 5, 2, 5];
const assetType = [
  "Plumbing System",
  "Panel",
  "Air Conditioning",
  "Panel",
  "HVAC",
  "Plumbing System",
  "Panel",
  "Fire Alarm",
  "Panel",
  "Fire Alarm",
  "Air Conditioning",
  "Panel",
  "HVAC",
  ,
];
const cost = [6, 1, 7, 7, 1, 2, 4, 6, 1, 6, 5, 1];
const repairs = [3, 2, 10, 7, 3, 4, 5, 3, 2, 6, 10, 7];
const data = [];
months.map((mon, index) => {
  data.push({
    time: months[index],
    manufacturer: manufacturer[index],
    assetType: assetType[index],
    cost: cost[index],
    repairs: repairs[index],
  });
});

export default class Revenue extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/composed-chart-with-axis-label-55s1s";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="time"
            label={{ value: "time", position: "insideBottomRight", offset: 0 }}
            scale="band"
          />
          <YAxis
            label={{ value: "repairs", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="repairs"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="manufacturer" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="cost" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
