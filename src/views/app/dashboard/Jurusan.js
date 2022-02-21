import { PieChart, Pie, Cell,Legend, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetJurusanRequest } from "../../../redux-saga/actions/DashboardAction";


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

export default function Jurusan(){
    const dispatch = useDispatch();

  const {jurusan} = useSelector((state) => state.dashboardState);
  //const { interest } = Bebas;
  //console.log(interest);

  useEffect(() => {
    dispatch(doGetJurusanRequest());
  }, [dispatch]);


  return (
    
    // <PieChart width={400} height={400}>
    //   <Pie
    //     dataKey="count"
    //     isAnimationActive={false}
    //     data={jurusan}
    //     cx="50%"
    //     cy="50%"
    //     outerRadius={80}
    //     fill="#8884d8"
    //     label="tale_education"
    //   />
     
    //   <Tooltip dataKey="tale_education" />
    // </PieChart>
    <PieChart width={200} height={200}>
    <Pie
      data={jurusan}
      isAnimationActive={true}
      cx={100}
      cy={100}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
      dataKey="count"
    >
      {jurusan.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip/>
    <Legend width={100} layout="vertical" verticalAlign="top" align="right" wrapperStyle={{left:200}} />


  </PieChart>



  )
}