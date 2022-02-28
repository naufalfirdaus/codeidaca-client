import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { doGetApplicantRequest } from '../../../redux-saga/actions/DashboardAction'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export default function ApplicantChart() {
    const dispatch = useDispatch();

    const {applicant} = useSelector((state) => state.dashboardState)
    //const { applicant } = Bebas
    //console.log(applicant);

    // const data = [
    //   {
    //     name: "January",

    //   },{
    //     name: "Maret",

    //   },{
    //     name: "Juny",

    //   },{
    //     name: "October",

    //   },
    // ]

    useEffect(() => {
        dispatch(doGetApplicantRequest())
    }, []);


    const options = {
        maintainAspectRatio	: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            // title: {
            //     display: true,
            //     text: 'Chart.js Line Chart',
            // },
        },
    };


    // let value = [];
    // const labels = ["Februari", "April", "Juli", "Oktober"]
    // console.log(applicant[1].name);
    // console.log(applicant[1].count);
    // console.log(labels[1]);
    // console.log(labels.length);
    // for(let i = 0; i<=(labels.length-1); i++){
    //     if(labels[i] === applicant[i].name){
    //         value.push(applicant[i].count)
    //     }else{
    //         value.push(0)
    //     }
    // }

    const labels = applicant.map((value) => value.name)
    
    const data = {
        labels,
        datasets: [
            {
                label: 'Applicant By Month',
                data: applicant.map((value) => value.count),
                borderColor: 'rgb(255,69,0)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            // {
            //   label: 'Dataset 2',
            //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            //   borderColor: 'rgb(53, 162, 235)',
            //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
        ],
    };


    return (
        <div className='position:relative h-48 w-96 m-auto'>
        <Line options={options} data={data} />
        </div>

    )
}