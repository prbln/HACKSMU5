import React, { PureComponent, useEffect } from "react";
import {
  LineChart,
  Line,
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
const url = "";
// useEffect(() => {
//   fetch(url).then((response) => {
//     console.log();
//   });
// }, []);
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
const repairs = [3, 2, 10, 7, 3, 4, 5, 3, 2, 6, 10];
const data = [];
months.map((mon, index) => {
  data.push({
    time: months[index],
    manufacturer: manufacturer[index],
    assetType: assetType[index],
    repairs: repairs[index],
  });
});
export default class Visualization extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" padding={{ left: 0 }}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis
            dataKey="repairs"
            label={{
              value: "Number of Repairs",
              angle: -90,
              position: "insideLeft",
              offset: 5,
              fontSize: 18,
            }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="manufacturer"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Legend fontSize={18} />

          <Line type="monotone" dataKey="assetType" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
