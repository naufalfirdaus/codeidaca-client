import React, { Fragment, useState, useEffect } from 'react'
import BarChart from "../../../component/chart/BarChart";
import LineChart from "../../../component/chart/LineChart";
import PieChart from "../../../component/chart/PieChart";
import {doGetJurusanRequest} from '../../../redux-saga/actions/DashboardAction'
import { useDispatch, useSelector } from 'react-redux';



export default function Jurusann() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(doGetJurusanRequest())
        
    }, []);
    const  Bebas  = useSelector((state) => state.dashboardState)
    const {jurusan} = Bebas
   // console.log(jurusan);

    const [Jurusan, setJurusan] = useState({
        labels: jurusan.map((data) => data.tale_major),
        datasets: [
          {
            label: "Users Gained",
            data: jurusan.map((data) => data.count),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

      return (
        <div className="App">
          <div style={{ width: 700 }}>
            <BarChart chartData={Jurusan} />
          </div>
          <div style={{ width: 700 }}>
            <LineChart chartData={Jurusan} />
          </div>
          <div style={{ width: 700 }}>
            <PieChart chartData={Jurusan} />
          </div>
        </div>
      );
    }
    

