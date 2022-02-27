import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetPendidikanRequest } from "../../../redux-saga/actions/DashboardAction";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const chartColors = [
  "#336699",
  "#99CCFF",
  "#999933",
  "#666699",
  "#CC9933",
  "#006666",
  "#3399FF",
  "#993300",
  "#CCCC99",
  "#666666",
  "#FFCC66",
  "#6699CC",
  "#663366",
  "#9999CC",
  "#CCCCCC",
  "#669999",
  "#CCCC66",
  "#CC6600",
  "#9999FF",
  "#0066CC",
  "#99CCCC",
  "#999999",
  "#FFCC00",
  "#009999",
  "#99CC33",
  "#FF9900",
  "#999966",
  "#66CCCC",
  "#339966",
  "#CCCC33",
  "#003f5c",
  "#665191",
  "#a05195",
  "#d45087",
  "#2f4b7c",
  "#f95d6a",
  "#ff7c43",
  "#ffa600",
  "#EF6F6C",
  "#465775",
  "#56E39F",
  "#59C9A5",
  "#5B6C5D",
  "#0A2342",
  "#2CA58D",
  "#84BC9C",
  "#CBA328",
  "#F46197",
  "#DBCFB0",
  "#545775"
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default function Pendidikan(){
    const dispatch = useDispatch();

  const {pendidikan} = useSelector((state) => state.dashboardState);
  //const { interest } = Bebas;
  //console.log(interest);

  useEffect(() => {
    dispatch(doGetPendidikanRequest());
  }, []);


  return (
  //   <ResponsiveContainer width="100%" height="100%">
  //   <PieChart width={400} height={400}>
  //     <Pie
  //       dataKey="count"
  //       isAnimationActive={false}
  //       data={pendidikan}
  //       cx="50%"
  //       cy="50%"
  //       outerRadius={80}
  //       fill="#8884d8"
  //       label="tale_education"
  //     />
     
  //     <Tooltip dataKey="tale_education" />
  //   </PieChart>
  // </ResponsiveContainer>
  <div className="w-64 h-48 use tailwind classes here">
    <ResponsiveContainer width="100%" height="100%">

  <PieChart width={200} height={200}>
    <Pie
      data={pendidikan}
      isAnimationActive={true}
      cx={100}
      cy={100}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
      dataKey="count"
    >
      {pendidikan.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
      ))}
    </Pie>
    <Tooltip/>
    <Legend width={100} wrapperStyle={{ top: 'auto', left:50, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
  </PieChart>
  </ResponsiveContainer>
  </div>

  )
}