import React, { Component,Fragment,useEffect, useRef, useState } from 'react'
import { Dialog, Menu, Transition, Listbox } from '@headlessui/react';
import { useNavigate, NavLink,Link, useLocation } from 'react-router-dom'
import { ChevronRightIcon} from '@heroicons/react/solid'
import config from "../../config/config";
import { useDispatch, useSelector } from 'react-redux';
import sld from './slide.css'
import search from './search.css'
import BtnSlider from './BtnSlide'
import dataSlider from './dataSlider'
import DataTesti  from './dataSlider';
import apiCurr from '../../api/apiCurr'
import CardCurriculum from '../../component/bootcamp/CardCurriculum'
import apiReview from '../../api/apiTesti'
import CardReview from '../../component/bootcamp/CardReview'
import { data } from 'autoprefixer';
import { doGetTestimoniRequest } from "../../redux-saga/actions/Review";
import { doGetCurriculumRequest, doGetCurriculumTypeRequest } from '../../redux-saga/actions/Curr';
import Regular from './Regular';
import Berbayar from './Berbayar';
import Testimoni from './Review'

  {/* Slider const */}
const slideIndex = 1;
const nextSlide = (n) => {
  showSlide(slideIndex += n);
}

const dotslide = (n) =>{
    showSlide(slideIndex = n)
}

const showSlide = (n) =>{
    let i;
    const slide = document.getElementsByClassName("imgslide");
  
    if (n > slide.length) {
      slideIndex = 1
    }
  
    if (n < 1) {
      slideIndex = slide.length;
    }
  
    for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none"
    }

    slide[slideIndex-1].style.display = 'block'
  
  }

  const curr_type =['Regular','Berbayar']

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Bootcamp() {
  const dispatch = useDispatch();
  const [listTesti, setTesti] = useState([])  
  const [listCurr, setCurr] = useState([])  
  const [listSearch, setListCurr] = useState([])  

  const [filter, setFilter] = useState({
      input:'',
      select:''
  })
  const [loading, setLoading] = useState(false);
  const curriculum = useSelector((state) => state.curriculumState)
  useEffect(() => {
    dispatch(doGetCurriculumRequest())
    setLoading(true);
}, []);

// const { list} = useSelector((state) => state.testimoniState);
// useEffect(() => {
//     dispatch(doGetTestimoniRequest());
// }, []);


useEffect(() => {
  setCurr(
      Array.isArray(curriculum) && curriculum.filter(data=>(
          (data.curr_name.toLowerCase().includes(filter.input.toLowerCase()) ||
          data.curr_type.toLowerCase().includes(filter.input.toLowerCase())) &&
          (filter.select === 'Type' || data.curr_type.includes(filter.select))))
      )

}, [curriculum]);


// console.log(curriculum)
const handleOnChange = (name) => (event) => {
  setFilter({ ...filter, [name]: event.target.value });
};

  const Search= event => {
    event.preventDefault();
    console.log(filter)
    setCurr(
      Array.isArray(curriculum) && curriculum.filter(data=>(
        (data.curr_name.toLowerCase().includes(filter.input.toLowerCase()) ||
        data.curr_type.toLowerCase().includes(filter.input.toLowerCase())) &&
        (filter.select === 'Type' || data.curr_type.includes(filter.select))))
    )
     console.log(curriculum)  
  }


 //testi const
 
  //slide
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
      if(slideIndex !== dataSlider.length){
          setSlideIndex(slideIndex + 1)
      } 
      else if (slideIndex === dataSlider.length){
          setSlideIndex(1)
      }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(dataSlider.length)
      }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }

  {/* Slide */}
  return (
     <>
     <div class='container'>
        {dataSlider.map((obj, index ) => {
          return (
            <div key={obj.id} >
              <div className={slideIndex === 1 ? "slide active-anim" : "slide"} >
                  
                  <div className='text'>
                    <h1>Bootcamp Regular</h1>
                  </div>
                  <div className='des'>
                      Lorem ipsum dolor sit amet, consectetur <br/>
                      adipiscing elit. Praesent sit amet justo nibh. <br/>
                      Quisque faucibus vitae magna eget gravida. <br/>
                      Maecenas faucibus, ipsum sit amet fringilla <br/>
                      fermentum, turpis dolor pretium ipsum, vel<br/>
                      cursus ligula velit vel diam. Maecenas tempus <br/>
                      maximus tristique. 
                  </div>
                </div>

                <div className={slideIndex === 2 ? "slide active-anim" : "slide"} >
                  <div className='text'>
                    <h1>Bootcamp Berbayar</h1>
                  </div>
                  <div className='des'>
                      Lorem ipsum dolor sit amet, consectetur <br/>
                      adipiscing elit. Praesent sit amet justo nibh. <br/>
                      Quisque faucibus vitae magna eget gravida. <br/>
                      Maecenas faucibus, ipsum sit amet fringilla <br/>
                      fermentum, turpis dolor pretium ipsum, vel<br/>
                      cursus ligula velit vel diam. Maecenas tempus <br/>
                      maximus tristique. 
                  </div>
                </div>

                <div className={slideIndex === 3 ? "slide active-anim" : "slide"} >
                  <div className='text'>
                    <h1>Training On Site</h1>
                  </div>
                  <div className='des'>
                      Lorem ipsum dolor sit amet, consectetur <br/>
                      adipiscing elit. Praesent sit amet justo nibh. <br/>
                      Quisque faucibus vitae magna eget gravida. <br/>
                      Maecenas faucibus, ipsum sit amet fringilla <br/>
                      fermentum, turpis dolor pretium ipsum, vel<br/>
                      cursus ligula velit vel diam. Maecenas tempus <br/>
                      maximus tristique. 
                  </div>
                </div>
              </div>
          )
        })}
            <div className="container-slider">
          {dataSlider.map((obj, index) => {
            return (
               <div
                  key={obj.id}
                  className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                  <img 
                    src={process.env.PUBLIC_URL + `/Imgs/slide${index + 1}.jpeg`} 
                  />
                </div>
                )
            })}
        
        </div>
        
        <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>

<br></br>
<br/>

{/* Filter */}
        <div className="input-group relative flex justify-center items-stretch w-full mb-2">
            <p className="text-xs mx-4 py-1">Filter</p>
              <input 
                type="search" 
                onChange={handleOnChange('input')}
                className="form-control relative w-48 block px-2 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 focus:outline-none" placeholder="java, nodejs, golang, net" aria-label="Search" aria-describedby="button-addon2"/>
              
              <select 
                name="curr_type"
                id="curr_type"
                onChange={handleOnChange('select')}
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
                onClick={Search}
                className="btn px-3 py-1 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 transition duration-150 ease-in-out flex items-center" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
          </div>

<br></br>
{/* Result Bootcamp Regular*/}
<p className = 'result' >Result Bootcamp Regular </p>
<br></br>     
    {/* <div class={'px-8 flex max-w max justify-around'}>                  */}
   
 <Regular 
      curriculum = {curriculum}
      />

<br></br>
<br></br>
{/* Result Bootcamp Berbayar*/}
<div>
    <h2 className = 'result'> Result Bootcamp Berbayar </h2>
    <br></br>
<Berbayar  
      curriculum = {curriculum}
/>
</div>

<br></br>
<br></br>
{/*Top Bootcamp*/}
<div className='result'>
  Top Bootcamp Regular Student NodeJS
</div>
        <Testimoni/>
    </>
  )
}