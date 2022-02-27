import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
//import {Chart} from '../components/Chart'
import Jurusan from "./Jurusan";
import Pendidikan from "./Pendidikan";
import Universitas from "./Universitas";
import BoardIdle from "./BoardIdle";
import Interest from "./Interest";
import Applicant from "./Applicant";

import { useDispatch, useSelector } from "react-redux";
import {
  doGetApplicantRequest,
  doGetBoardidleRequest,
  doGetInterestRequest,
  doGetJurusanRequest,
  doGetPendidikanRequest,
  doGetSummaryRequest,
  doGetUniversitasRequest,
} from "../../../redux-saga/actions/DashboardAction";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip, BarChart, Bar,  XAxis, YAxis, CartesianGrid, LineChart,
  Line, } from "recharts";
import JurusanChart from "./JurusanChart";
import PendidikanChart from "./PendidikanChart";
import UniversitasChart from "./UniversitasChart";
import InterestChart from "./InterestChart";
import ApplicantChart from "./ApplicantChart";
import BoardIdleChart from "./BoardIdleChart";

export default function Dashboard() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const bebas = useSelector((state) => state.dashboardState);
  const { jurusan, summary } = bebas;
  const data = summary[0]
  console.log(summary+"aaaaa");

  useEffect(() => {
    dispatch(doGetSummaryRequest());
    dispatch(doGetJurusanRequest());
    dispatch(doGetPendidikanRequest());
    dispatch(doGetUniversitasRequest());
    dispatch(doGetBoardidleRequest());
    dispatch(doGetInterestRequest());
    dispatch(doGetApplicantRequest());
  }, []);
  console.log(bebas);

  return (
    <>
      <div>
        <div className="border-b border-gray-200 px-6 py-6 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold leading-6 text-gray-900 sm:truncate">
              HOME
            </h1>
          </div>
        </div>

        
        <div class="min-h-screen w-full p-4">
          <div class="w-full mb-6 pt-3">
            <div class="flex flex-row items-center justify-between mb-4">
              <div class="flex flex-col">
                {/* <div className="text-xs uppercase font-light text-gray-500">
                  Overview
                </div> */}
                <div class="text-xl font-bold">SUMMARY</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
          {(summary && summary.map((data) => (
          <tr class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-gray-500">
                      Candidate
                    </div>
                    <div class="text-xl font-bold">{data.Candidate}</div>
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="stroke-current text-gray-500"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-gray-500">
                      On Training
                    </div>
                    <div class="text-xl font-bold">{data.Bootcamp}</div>
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewbox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-current text-gray-500"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-gray-500">
                      On Boarding
                    </div>
                    <div class="text-xl font-bold">{data.Placement}</div>
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewbox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-current text-gray-500"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-gray-500">
                      Idle
                    </div>
                    <div class="text-xl font-bold">{data.Idle}</div>
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewbox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-current text-gray-500"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>
          </tr>
        )))}
          </div>

          
          <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
            <div class="w-full lg:w-1/3">
              <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between mb-6">
                  <div class="flex flex-col">
                    <div className="text-sm font-light text-gray-500">
                      
                    </div>
                    <div className="text-sm font-bold">
                      <span>APPLICANT BY MONTH</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row w-full">
                  <div class="h-60">
                    <div class="recharts-responsive-container w-96 object-center">
                        <div class="object-center px-14 ">
                        <ApplicantChart />
                        </div>
                      {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}
                        
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="w-full lg:w-1/3">
              <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between mb-6">
                  <div class="flex flex-col">
                    <div className="text-sm font-light text-gray-500">
                    
                    </div>
                    <div className="text-sm font-bold">
                      <span>INTEREST TECHNOLOGY</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row w-full">
                  <div class="w-full h-60">
                    <div class="recharts-responsive-container h-full w-full object-center">
                        <div class="object-center px-14">
                        <InterestChart />
                        </div>
                      {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}
                        
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/3">
              <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between mb-6">
                  <div class="flex flex-col">
                    <div className="text-sm font-light text-gray-500">
                      
                    </div>
                    <div className="text-sm font-bold">
                      <span>BOARDING VS IDLE</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row w-full">
                  <div class="w-full h-60">
                    <div class="recharts-responsive-container h-full w-full object-center">
                        <div class="object-center px-14">
                          
                        <BoardIdleChart />
                        
                        </div>
                      {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}
                        
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
            <div class="w-full lg:w-1/3">
              <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between mb-6">
                  <div class="flex flex-col">
                    <div className="text-sm font-light text-gray-500">
                      
                    </div>
                    <div className="text-sm font-bold">
                      <span >PENDIDIKAN</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row w-full">
                  <div class="w-full h-60">
                    <div class="recharts-responsive-container h-full w-full object-center">
                        <div class="object-center px-14">
                        <PendidikanChart />
                        </div>
                      {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}
                        
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="w-full lg:w-1/3">
              <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between mb-6">
                  <div class="flex flex-col">
                    <div className="text-sm font-light text-gray-500">
                      
                    </div>
                    <div className="text-sm font-bold">
                      <span>UNIVERSITAS</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row w-full">
                  <div class="w-full h-60">
                    <div class="recharts-responsive-container h-full w-full object-center">
                        <div class="object-center px-14">
                        <UniversitasChart />
                        </div>
                      {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}
                        
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/3">
              <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between mb-6">
                  <div class="flex flex-col">
                    <div className="text-sm font-light text-gray-500">
                      
                    </div>
                    <div className="text-sm font-bold">
                      <span>JURUSAN</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row w-full">
                  <div class="w-full h-60">
                    <div class="recharts-responsive-container h-full w-full object-center">
                        <div class="object-center px-14">
                        <JurusanChart />
                        </div>
                      {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}
                        
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          
        </div>
      </div>
    </>
  );
}
