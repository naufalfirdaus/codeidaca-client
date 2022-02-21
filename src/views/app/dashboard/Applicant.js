import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {doGetApplicantRequest} from '../../../redux-saga/actions/DashboardAction'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function Applicant(){
    const dispatch = useDispatch();

    const  Bebas  = useSelector((state) => state.dashboardState)
    const {applicant} = Bebas
    console.log(applicant);

    const data = [
      {
        name: "January",
        
      },{
        name: "Maret",
        
      },{
        name: "Juny",
        
      },{
        name: "October",
        
      },
    ]

    useEffect(() => {
        dispatch(doGetApplicantRequest())
    }, [dispatch]);

    return(
    //     <LineChart
    //   width={350}
    //   height={200}
    //   data={applicant}
    //   margin={{
    //     top: 5,
    //     right: 30,
    //     left: 20,
    //     bottom: 5
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <Tooltip />
    //   {/* <Legend /> */}
    //   <Line
    //     type="monotone"
    //     dataKey="count"
    //     stroke="#8884d8"
    //     activeDot={{ r: 8 }}
    //   />
    // </LineChart>


    <div>
      
      <LineChart
        width={350}
        height={200}
        data={applicant}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          connectNulls
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </LineChart>
    </div>


    )
}