// import React from "react";
// import { Pie } from "react-chartjs-2";

// const ReactChart = () => {
//   const pieChartData = {
//     labels: ["October", "November", "December"],
//     datasets: [{
//         data: [8137119, 9431691, 10266674],
//         label: "Infected People",
//         backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600"],
//         hoverBackgroundColor: ["#175000", "#003350", "#993d00"]
//     }]
//   };
//   const pieChart = (
//     <Pie
//       type="Pie"
//       width={130}
//       height={50}
//       options={{
//         title: {
//           display: true,
//           text: "COVID-19 Cases of Last 3 Months",
//           fontSize: 40
//         },
//         legend: {
//           display: true, //Is the legend shown?
//           position: "right" //Position of the legend.
//         },
//       }}
//       data={pieChartData}
//   //     type= 'doughnut'
//   // data= {pieChartData}
//   // options= {
//   //   legend= {
//   //     display: false
//   //   },
//   //   plugins= {
//   //     datalabels: {
//   //       display: true,
//   //       formatter: (val, ctx) => {
//   //         return ctx.chart.data.labels[ctx.dataIndex];
//   //       },
//   //       color: '#fff',
//   //       backgroundColor: '#404040'
//   //     },
//   //   }
//   // }
//     />
//   );
//   return pieChart;
// };
// export default ReactChart;


import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Doughnut, Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { doGetUniversitasRequest } from "../../../redux-saga/actions/DashboardAction";
//import { chartColors } from "./colors";

//import "./styles.css";



export default function ReactChart() {
  let chartInstance = null;

  // useEffect(() => {
  //   const legend = chartInstance.chartInstance.generateLegend();
  //   console.log(chartInstance, "textinput");
  //   console.log(legend);
  //   document.getElementById("legend").innerHTML = legend;
  // }, [chartInstance]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doGetUniversitasRequest());
  }, [dispatch]);

  const {universitas} = useSelector((state) => state.dashboardState);

  const chartColors = [
    "#336699",
    "#99CCFF",
    "#999933",
    "#666699",
    "#CC9933",
    "#006666",
    "#3399FF",
    "#993300",
    "#CCCC99",
    "#666666",
    "#FFCC66",
    "#6699CC",
    "#663366",
    "#9999CC",
    "#CCCCCC",
    "#669999",
    "#CCCC66",
    "#CC6600",
    "#9999FF",
    "#0066CC",
    "#99CCCC",
    "#999999",
    "#FFCC00",
    "#009999",
    "#99CC33",
    "#FF9900",
    "#999966",
    "#66CCCC",
    "#339966",
    "#CCCC33",
    "#003f5c",
    "#665191",
    "#a05195",
    "#d45087",
    "#2f4b7c",
    "#f95d6a",
    "#ff7c43",
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
    "#545775"
  ];
  
  
  const options = {
    legend: {
      display: true,
      position: "right"
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };
  
  const pieOptions = {
    legend: {
      display: false,
      position: "right",
      legendCallback: function(chart) {
        // Return the HTML string here.
        console.log(chart);
        return [
          <ul>
            <li>z</li>
            <li>zzzz</li>
            <li>ppp</li>
            <li>adasda</li>
          </ul>
        ];
      }
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };
  
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: universitas.map((value) => value.name),
    datasets: [
      {
        data: universitas.map((value) => value.count),
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors
      }
    ]
  };
  
  const pieData = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["usa", "europe", "africa"],
    datasets: [
      {
        data: [200, 150, 20, 10],
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors
      }
    ]
  };


  return (
    <div className="ReactChart">
      
      <div style={styles.relative}>
        {/* <Doughnut data={data} options={options} /> */}
        <div style={styles.pieContainer}>
          <Pie
            data={data}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
          />
        </div>
        <div id="legend" />
      </div>
    </div>
  );
}

const styles = {
  pieContainer: {
    width: "10%",
    height: "10%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  relative: {
    position: "relative"
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<ReactChart />, rootElement);