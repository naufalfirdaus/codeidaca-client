import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetUniversitasRequest } from "../../../redux-saga/actions/DashboardAction";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

export default function Universitas(){
    const dispatch = useDispatch();

  const {universitas} = useSelector((state) => state.dashboardState);
  //const { interest } = Bebas;
  //console.log(interest);

  useEffect(() => {
    dispatch(doGetUniversitasRequest());
  }, [dispatch]);


  return (
  //   <ResponsiveContainer width="100%" height="100%">
  //   <PieChart width={400} height={400}>
  //     <Pie
  //       dataKey="count"
  //       isAnimationActive={true}
  //       data={universitas}
  //       cx="50%"
  //       cy="50%"
  //       outerRadius={80}
  //       fill="#8884d8"
  //       label="tale_education"
  //     />
     
  //     <Tooltip dataKey="tale_education" />
  //   </PieChart>
  // </ResponsiveContainer>

  <PieChart width={200} height={200}>
    <Pie
      data={universitas}
      cx={100}
      cy={100}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
      dataKey="count"
    >
      {universitas.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    {/* <Legend width={100} wrapperStyle={{ top: 'auto', left:50, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}

    <Tooltip/>
  </PieChart>

  )
}