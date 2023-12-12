import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jul 23",
    uv: 4200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr 23",
    uv: 3500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Jan 23",
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
];

export function Chart() {
  return (
    <ResponsiveContainer height={230}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#c7c2be" fill="#69330D" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
