import { Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { doGetBoardidleRequest } from "../../../redux-saga/actions/DashboardAction";
import ChartDataLabels from "chartjs-plugin-datalabels"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const chartColors = [
    "#FF4500",
    "#d45087",
    "#f95d6a",
    "#FF9900",
    "#993300",
    "#99CCFF",
    "#CCCCCC",
    "#CC6600",
    "#99CC33",
    "#545775",
    "#9999FF",
    "#ff7c43",
    "#CCCC99",
    "#336699",
    "#999933",
    "#666699",
    "#CC9933",
    "#006666",
    "#3399FF",
    "#666666",
    "#FFCC66",
    "#6699CC",
    "#663366",
    "#9999CC",
    "#669999",
    "#CCCC66",
    "#0066CC",
    "#99CCCC",
    "#999999",
    "#FFCC00",
    "#009999",
    "#999966",
    "#66CCCC",
    "#339966",
    "#CCCC33",
    "#003f5c",
    "#665191",
    "#a05195",
    "#2f4b7c",
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

];

export default function BoardIdleChart() {
    const dispatch = useDispatch();

    const {boardidle} = useSelector((state) => state.dashboardState);
    //const { boardidle } = Bebas;
    //console.log(boardidle);

    useEffect(() => {
        dispatch(doGetBoardidleRequest());
    }, []);



    const data = {
        labels: boardidle.map((value) => value.name),
        datasets: [
            {
                label: '# of Votes',
                data: boardidle.map((value) => value.count),
                backgroundColor: chartColors,
                borderColor: chartColors,
                borderWidth: 1,
            },
        ],
    };

    // const data = {
    //     labels: boardidle.map((value) => value.name),
    //     datasets: [
    //         {
    //             label: '# of Votes',
    //             data: boardidle.map((value) => value.count),
    //             backgroundColor: [
    //                 "#99CCFF",
    //                 "#999933",
    //                 "#666699",
    //                 "#CC9933",
    //                 "#006666",
    //                 "#3399FF",
    //                 "#993300",
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)',
    //             ],
    //             borderWidth: 1,
    //         },
    //     ],
    // };

    const options = {
        responsive: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    usePointStyle: true

                }
            },
            // title: {
            //     display: true,
            //     text: 'Chart.js Line Chart',
            // },
        },
    };

    const set = {
        responsive:false,
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let datasets = ctx.chart.data.datasets;
      
              if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                let percentage = Math.round((value / sum) * 100) + "%";
                return percentage;
              } else {
               // return percentage;
              }
            },
            color: "black"
          },
          legend: {
              position: 'right',
              labels:{
                  boxWidth: 6,
                  usePointStyle:true,
                  render: 'percentage',
                    fontColor: ['green', 'white', 'red'],
                    precision: 2
              }
          }
        }
      };


    return (
        <div className='position:relative h-60 w-60 m-auto'>
            <Pie options={set} data={data} plugins={[ChartDataLabels]} />
        </div>



    )

}