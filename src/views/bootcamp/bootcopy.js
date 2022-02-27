import React, { useEffect, useState } from 'react'
import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom'
import { ChevronRightIcon} from '@heroicons/react/solid'
import config from "../../config/config";
import sld from './slide.css'
import search from './search.css'
import BtnSlider from './BtnSLide'
import dataSlider from './dataSlider'
import apiCurr from '../../api/apiCurr'
import CardCurriculum from '../../components/bootcamp/CardCurriculum'
import apiReview from '../../api/apiTesti'
import CardReview from '../../components/bootcamp/CardReview'
import { useDispatch, useSelector } from 'react-redux';

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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const curr_type =['Regular','Berbayar']
export default function Bootcamp() {

  const [listTesti, setTesti] = useState([])  
  const [listCurr, setCurr] = useState([])  
  const [filter, setFilter] = useState({
      input:'',
      select:''
  })
  
  // const {curriculum} = useSelector((state) => state.batchState)

// useEffect(() => {
//   apiCurr.findAll().then(data => {
//     setCurr(data)
//     console.log(data)
//   })
// },[]) 

useEffect(() => {
  apiCurr.findRegular().then(data => {
    setCurr(data)
    console.log(data)
  })
},[]) 

useEffect(() => {
  apiCurr.findBerbayar().then(data => {
    setCurr(data)
    console.log(data)
  })
},[]) 

useEffect(() => {
  apiReview.findTesti().then(tes => {
    setTesti(tes)
    console.log(tes)
  })
},[]) 

// useEffect(() => {
//   setCurr(
//       Array.isArray(curriculum) && curriculum.filter(data=>(
//           (data.curr_name.toLowerCase().includes(filter.input.toLowerCase()) ) &&
//           (filter.select === 'Type' || data.curr_type.includes(filter.select))))
//       )
// }, [curriculum]);

const handleOnChange = (name) => (event) => {
    setFilter({ ...filter, [name]: event.target.value });
  };

// const search = event =>{
//     event.preventDefault();
//     setCurr(
//         Array.isArray(curriculum) && curriculum.filter(data=>(
//             (data.curr_name.toLowerCase().includes(filter.input.toLowerCase())) &&
//             (filter.select === 'Type' || data.curr_type.includes(filter.select))))
//         )
// } 

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
      <div className=''>
     <div className='container'>
        {dataSlider.map((obj, index ) => {
          return (
            <div key={obj.id} >
              <div className={slideIndex === 1 ? "slide active-anim" : "slide"} >
                  <div className='text'>
                    Bootcamp Regular
                  </div>
                  <div className='des'>
                      Bootcamp Regular adalah <br/>
                      Bootcamp Regular adalah <br/>
                      Bootcamp Regular adalah <br/>
                      Bootcamp Regular adalah <br/>
                      Bootcamp Regular adalah <br/>
                  </div>
                </div>

                <div className={slideIndex === 2 ? "slide active-anim" : "slide"} >
                  <div className='text'>
                    Bootcamp Berbayar
                  </div>
                                        
                  <div className='des'>
                      Bootcamp Berbayar adalah <br/>
                      Bootcamp Berbayar adalah <br/>
                      Bootcamp Berbayar adalah <br/>
                      Bootcamp Berbayar adalah <br/>
                      Bootcamp Berbayar adalah <br/>
                  </div>
                </div>

                <div className={slideIndex === 3 ? "slide active-anim" : "slide"} >
                  <div className='text'>
                    Training On Site
                  </div>
                                      
                  <div className='des'>
                      Training On Site  adalah <br/>
                      Training On Site adalah <br/>
                      Training On Site adalah <br/>
                      Training On Site adalah <br/>
                      Training On Site adalah <br/>
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
              cassName={slideIndex === index + 1 ? "dot active" : "dot"}
              >
            </div>
        ))}
      </div>
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    </div>
<br></br>

{/* Filter */}
        <div className='App'>
          <input type="text" placeholder="java, nodejs, golang, net"/>
          <Menu as="div" className="relative inline-block text-left">
        
            <div>
              <select 
                  name="curr_name"
                  id="curr_type"
                  onChange={handleOnChange('select')}
                  className="capitalize form-select form-select-sm appearance-none block mx-1 px-1 py-0.5 w-20 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-1 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500" aria-label=".form-select-sm example"
              >
                  <option>Type</option>
                  {
                    (curr_type || []).map((value, index) => (
                    <option className="capitalize" value={value} key={index}>{value}</option>
                    ))
                  }
              </select> 

              <button type ="submit"
                  onClick={search}
                  className= "inline-flex  px-5 py-0.5 mx-1 text-sm font-medium text-white bg-black focus:outline-none focus:ring-offset-1 flex items-center rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 m-0 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Search
              </button>
            </div>
        </Menu>
      </div>

<br></br>
<br></br>

{/* Result Bootcamp Regular*/}
<p className = 'result' >Result Bootcamp Regular </p>
<br></br>     
    {/* <div class={'px-8 flex max-w max justify-around'}>                  */}
    <div class={'px-8 flex max-w max justify-around'}>
          {listCurr.map(data => 
            <CardCurriculum name = {data.curr_name}
                            title = {data.curr_title}
                            duration = {"Durasi : " + data.curr_duration}
                            description = {"Pembelajaran : " + data.curr_description}
                            link = {"Curriculum"}
            />
          )}
      </div>

<br></br>
<br></br>

{/* Result Bootcamp Berbayar*/}
<div>
    <h2 className = 'result'> Result Bootcamp Berbayar </h2>
    <br></br>
      <div class={'px-8 flex max-w max justify-around'}>
          {listCurr.map(data => 
            <CardCurriculum name = {data.curr_name}
                            title = {data.curr_title}
                            duration = {"Durasi : " + data.curr_duration}
                            description = {"Pembelajaran : " + data.curr_description}
                        //    rating =  {data.cure_rating}
                            harga = {"Rp. 199.000"}
                            link = {"Add To Chart"}
              />
            )}
      </div>
</div>

<br></br>
<br></br>
{/*Top Bootcamp*/}
<div className='result'>
  Top Bootcamp Regular Student NodeJS
</div>
        <section
            className="containerr mt-0 text-center flex flex-col items-center"
            id="testimonial"
        >
          <div className='font-bold mt-10'>Testimonial</div>
            <div
                className="mt-12 min-w-[80vw] justify-center md:gap-4 md:min-w-full grid gap-8 md:grid-cols-4  "
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                {listTesti &&
                    listTesti.map((data) => (
                        <CardReview
                            name={data.user_name}
                            designation={data.tale_position}
                            userImg={`${config.urlImage}/${data.tale_photo}`}
                            rating={data.cure_rating}
                            bootcamp={data.tale_bootcamp}
                            testimonial={data.cure_review}
                        />
                    ))}
            </div>
            <div className="flex justify-end items-end justify-items-end w-full mt-3  ">
                <Link to="viewall">
                    <button
                        type="button"
                        className=" text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 flex justify-center items-center px-4 py-2 "
                    >
                        View All
                        <ChevronRightIcon className="w-8 " />
                    </button>
                </Link>
            </div>
        </section>
      </div>
    </>
  )
}