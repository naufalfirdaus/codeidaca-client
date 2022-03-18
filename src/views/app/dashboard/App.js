import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {doGetJurusanRequest} from '../../../redux-saga/actions/DashboardAction'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function App() {
    const dispatch = useDispatch();

    const  Bebas  = useSelector((state) => state.dashboardState)
    const {jurusan} = Bebas
    console.log(Bebas.jurusan);

    useEffect(() => {
        dispatch(doGetJurusanRequest())
    }, [dispatch]);
  return (
    <LineChart
      width={500}
      height={300}
      data={jurusan}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="tale_major" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="count"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
