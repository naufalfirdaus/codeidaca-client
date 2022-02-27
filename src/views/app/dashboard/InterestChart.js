import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetInterestRequest } from "../../../redux-saga/actions/DashboardAction";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
// import faker from 'faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  


export default function InterestChart() {
    const dispatch = useDispatch();
  
    const Bebas = useSelector((state) => state.dashboardState);
    const { interest } = Bebas;
    console.log(interest);
  
    useEffect(() => {
      dispatch(doGetInterestRequest());
    }, [dispatch]);


    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },
        },
      };

    
      
      const labels = interest.map((data) => data.name);
      
     const data = {
        labels,
        datasets: [
          {
            label: 'Interest',
            data: interest.map((data) => data.count),
            backgroundColor: 'rgb(255,69,0)',
          },
        ],
      };

    return (
        <Bar 
        options={options} 
        data={data} 
        />
    )
}