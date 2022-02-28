import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetUniversitasRequest } from "../../../redux-saga/actions/DashboardAction";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels"
ChartJS.register(ArcElement, Legend);


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const chartColors = [
    "#FF4500",
    "#d45087",
    "#f95d6a",
    "#FFA500",
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

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//             {`${(percent * 100).toFixed(0)}%`}
//         </text>
//     );
// };


// let options = {
//     plugins: {
//       datalabels: {
//         formatter: (value, ctx) => {
//           let datasets = ctx.chart.data.datasets;
  
//           if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
//             let sum = datasets[0].data.reduce((a, b) => a + b, 0);
//             let percentage = Math.round((value / sum) * 100) + "%";
//             return percentage;
//           } else {
//            // return percentage;
//           }
//         },
//         color: "red"
//       }
//     }
//   };


export default function UniversitasChart() {
    const dispatch = useDispatch();

    const { universitas } = useSelector((state) => state.dashboardState);
    //const { interest } = Bebas;
    //console.log(interest);

    useEffect(() => {
        dispatch(doGetUniversitasRequest());
    }, []);


    const data = {

        labels: universitas.map((value) => value.name),

        datasets: [
            {
                label: '# of Votes',
                data: universitas.map((value) => value.count),
                backgroundColor: chartColors,
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 6,
                    usePointStyle: true,
                    render: 'precentage',
                    fontColor: ['green', 'white', 'red'],
                    precision: 2
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

    // const styles = {
    //     pieContainer: {
    //         width: "100%",
    //         height: "10%",
    //         top: "50%",
    //         left: "50%",
    //         position: "absolute",
    //         transform: "translate(-50%, -50%)"
    //     },
    //     relative: {
    //         position: "relative"
    //     }
    // };

    // const options = {
    //     responsive: false,
    //     plugins: {
    //         legend: {
    //             display: true,
    //             position: 'right',
    //             labels: {
    //                 boxWidth: 6,
    //                 usePointStyle: true
    //             }
    //         },
    //         // labels: {
    //         //     render:'percentage',
    //         //     fontColor: ['green', 'white'],
    //         //     precision: 2
    //         // }
    //         // title: {
    //         //     display: true,
    //         //     text: 'Chart.js Line Chart',
    //         // },
    //     },
    // };


    // return (

    //     <div style={styles.relative}>
    //         <div style={styles.pieContainer}>
    //             <Pie
    //                 data={data}
    //                 width={20}
    //                 height={20}
    //                 options={{
    //                     title: {
    //                         display: true,
    //                         text: "COVID-19 Cases of Last 3 Months",
    //                         fontSize: 15
    //                     },
    //                     legend: {
    //                         display: true, //Is the legend shown?
    //                         position: "top" //Position of the legend.
    //                     }
    //                 }}

    //             />
    //         </div>
    //     </div>
    // )

    return (
        <div className='position:relative h-60 w-60 m-auto'>
            <Pie options={set} data={data} plugins={[ChartDataLabels]} />
        </div>



    )
}