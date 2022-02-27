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

var options = {
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        let datasets = ctx.chart.data.datasets;

        if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
          let sum = datasets[0].data.reduce((a, b) => a + b, 0);
          let percentage = Math.round((value / sum) * 100) + "%";
          return percentage;
        } 
      },
      color: "red"
    }
  }
};


export default function UniversitasChart() {
    const dispatch = useDispatch();

    const { universitas } = useSelector((state) => state.dashboardState);
    //const { interest } = Bebas;
    //console.log(interest);

    useEffect(() => {
        dispatch(doGetUniversitasRequest());
    }, [dispatch]);


    const data = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    };

    const setting = {
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          labels: {
            render: 'percentage',
            fontColor: ['green', 'white', 'red'],
            precision: 2
          },datalabels: {
            formatter: (value,context) => {
              //console.log(value);
              console.log(context.chart.data.datasets[0].data);
              const datapoints = context.chart.data.datasets[0].data;
              function totalSum(total,datapoint) {
                return total + datapoint;
              }
              const totalValue = datapoints.reduce(totalSum,0)
              const percentageValue = (value/totalValue * 100);


              return percentageValue;
            }
          }
        },
      },
      
    }

    const set = {
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
        color: "red"
      }
    }
  };

    const plugin = {
      plugins: [ChartDataLabels]
    }

    return (
        <div className='position:relative h-60 w-60 m-auto'>
            <Pie options={set} data={data} plugins={[ChartDataLabels]} />
        </div>



    )
}