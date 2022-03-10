import React, { Fragment, useState, useEffect } from "react";
import apiCurr from '../../api/apiCurr'
import config from "../../config/config";
import Page from "../../component/commons/Page";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { doGetCurriculumRequest, doGetCurriculumTypeRequest } from '../../redux-saga/actions/Curr';
import CardCurriculum from '../../component/bootcamp/CardCurriculum'

const curr_type = ["Regular", "Berbayar"];

export default function TalentSaga() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { curriculum } = useSelector((state) => state.curriculumState);

    // search
    const [listCurr, setCurr] = useState([]);
    const [search, setSearch] = useState("");

    // fase didmount
    useEffect(() => {
        dispatch(doGetCurriculumRequest());
        setLoading(true);
    }, []);
 
    return (
            <div className="hidden mt-0 sm:block">
                <div className="align-middle inline-block min-w-full border-b border-gray-200">
                    <div className=" flex items-baseline font-semibold justify-center mt-5">
                        <div className="input-group relative flex justify-center items-stretch w-full mb-2">
                        <p className="text-xs mx-4 py-1">Filter</p>
              <input 
                type="search" 
                onChange={(event) => {
                    setSearch(event.target.value);}}
                className="form-control relative w-48 block px-2 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 focus:outline-none" 
                placeholder="java, nodejs, golang, net" aria-label="Search" aria-describedby="button-addon2"/>
              
              <select 
                name="curr_type"
                id="curr_type"
                // onChange={handleOnChange('select')}
                className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-1 w-24 text-xs font-normal text-black-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-black-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500" aria-label=".form-select-sm example"
              >
                          
              <option>Type</option>
               {
                  (curr_type || []).map((value, index) => (
                   <option className="capitalize" value={value} key={index}>{value}</option>
                   ))
                }
              </select>
              
              <button 
                type="submit"
              //  onClick={Search}
                className="btn px-3 py-1 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 transition duration-150 ease-in-out flex items-center" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
          </div>
                    </div>
                    {loading === true ? (
                            <tbody className="bg-white divide-y divide-gray-200">
                                {curriculum &&
                                    curriculum
                                        .filter((data) => {
                                            if (search === "") {
                                            //   return data;
                                            } else if (
                                                data.curr_name
                                                    .toLowerCase()
                                                    .includes(
                                                        search.toLowerCase()
                                                    )
                                            ) {
                                                return data;
                                            }
                                            else if (
                                                data.curr_type
                                                    .toLowerCase()
                                                    .includes(
                                                        search.toLowerCase()
                                                    )
                                            ) {
                                                return data;
                                            }
                                            
                                        })
                                        .map((data) => (
                                            <CardCurriculum logo = {"/img/log2.png"}
                                            name = {data.curr_name}
                                            title = {data.curr_title}
                                            duration = {"Durasi : " + data.curr_duration}
                                            description = {"Pembelajaran : " + data.curr_description}
                                            harga = {"Rp. " + data.curr_price}
                                            link = {"Curriculum"}
                                            />
                                                    
                                        ))}
                                        
                            </tbody>
                    ) : (
                        <button className="bg-blue-600 p-3 rounded-full flex space-x-3 mt-5">
                        </button>
                    )}
                </div>
            </div>
    );
}