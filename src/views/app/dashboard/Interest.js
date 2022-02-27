import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetInterestRequest } from "../../../redux-saga/actions/DashboardAction";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Interest() {
  const dispatch = useDispatch();

  const Bebas = useSelector((state) => state.dashboardState);
  const { interest } = Bebas;
  console.log(interest);

  useEffect(() => {
    dispatch(doGetInterestRequest());
  }, [dispatch]);

  return (
    // <ResponsiveContainer width="100%" height="100%">
    //     <BarChart
    //       width={500}
    //       height={300}
    //       data={interest}
    //       margin={{
    //         top: 5,
    //         right: 30,
    //         left: 20,
    //         bottom: 5,
    //       }}
    //     >
    //       <CartesianGrid strokeDasharray="3 3" />
    //       <XAxis dataKey="tale_bootcamp" />
    //       <YAxis />
    //       <Tooltip />
    //       <Legend />
    //       <Bar dataKey="count" fill="#8884d8" />
    //     </BarChart>
    //   </ResponsiveContainer>


//<ResponsiveContainer width="20%" height="20%">
    <BarChart
    width={300}
    height={200}
    data={interest}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    
    <Bar dataKey="count" fill="#8884d8" />
    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
  </BarChart>
  //</ResponsiveContainer>
  );
}
