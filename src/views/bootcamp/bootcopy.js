import React, { Component,Fragment,useEffect, useRef, useState } from 'react'
import { Dialog, Menu, Transition, Listbox } from '@headlessui/react';
import { Outlet,Link } from 'react-router-dom'
import { CheckIcon, SelectorIcon, ChevronDownIcon } from '@heroicons/react/solid'
import sld from './slide.css'
import search from './search.css'
import {View} from 'react-native'
import {motion} from 'framer-motion'
import image from './testimonial'
import testi from './testi.css'




const slideIndex = 1;
showSlide(slideIndex);

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

//   const search = event =>{
//     event.preventDefault();
//     if (filter.input || (filter.select)) {
//         listCurr(
//             Array.isArray(listCurr) && listCurr.filter(data=>(
//                 (data.curr_name.toLowerCase().includes(filter.input.toLowerCase())) &&
//                 (filter.select === 'type' || data.curr_type.includes(filter.select))))
//             )
//     }
    
// }

export default function bootcamp() {
  // const[width, setwidth] = useState([1]);
  // const carousel= useRef();
 
  // useEffect(() => {
  //     console.log(carousel.current.scrollWidth, carousel.current.offSetWidth);
  //     setwidth(carousel.current.scrollWidth - carousel.current.offSetWidth);
  //   }, []);

    return (
        <div class="container">
            <div class="content-slide">
                 <div class="text">
                    <h3> Bootcamp Reguler </h3>
                    <h5> ......................</h5>
                    <h5> ......................</h5>
                    <h5> ......................</h5>
                  </div>
                <img
                src="./assets/images/codeid.png"
                alt=""
                />
    
            <div class="text">
                <h3> Bootcamp Berbayar </h3>
                </div>
            <img
            src="./assets/images/codeid.png"
            alt="Workflow"
            />
    
            <div class="text">
            <h3> Training Onsite </h3>
            </div>
        <img
            src="./assets/images/codeid.png"
            alt="Workflow"
        />
  
      </div>
          {/* Controls */}
    <a class="prev" onClick="nextslide(-1)"> &#10094;</a>
    <a class="next" onClick="nextslide(1)"> &#10095;</a>
  
 
   <div className='App'>
        <h3 > Filter</h3>
      <input type="text" placeholder="java, nodejs, golang, net"/>
      
      </div>
    
<div className="text-right" >
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex  px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Regular
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >

                    Regular
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                   
                    Berbayar
                  </button>
                )}
              </Menu.Item>
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  
  
    <div>
    <h2>  Result Bootcamp Regular </h2>
<View style={{flexDirection: "column", justifyContent:"space-around"}}>
      <View style= {{height: 200, width: 170}}>
          <img
          className="h-8 w-auto"
          src="./assets/images/codeid.png"
          alt="Workflow"
        />

        <h3> NodeJS Full Stack </h3>
        <h4> Build Rest API With NodeJS </h4>
        <h4> Durasi : 3 Bulan </h4>
        <h4> Pembelajaran : Online / Offline </h4>
      
        <Link to="talent" className="text-base font-medium text-gray-500 hover:text-gray-900">
          Curriculum
        </Link>
      </View>

      <View style= {{height: 200, width: 170}}>
          <img
          className="h-8 w-auto"
          src="./assets/images/codeid.png"
          alt="Workflow"
        />

        <h5> NodeJS Full Stack </h5>
        <h4> Build Rest API With NodeJS </h4>
        <h4> Durasi : 3 Bulan </h4>
        <h4> Pembelajaran : Online / Offline </h4>
      
        <Link to="talent" className="text-base font-medium text-gray-500 hover:text-gray-900">
          Curriculum
        </Link>
      </View>

      <View style= {{height: 200, width: 170}}>
          <img
          className="h-8 w-auto"
          src="./assets/images/codeid.png"
          alt="Workflow"
        />

        <h3> NodeJS Full Stack </h3>
        <h4> Build Rest API With NodeJS </h4>
        <h4> Durasi : 3 Bulan </h4>
        <h4> Pembelajaran : Online / Offline </h4>
      
        <Link to="talent" className="text-base font-medium text-gray-500 hover:text-gray-900">
          Curriculum
        </Link>
      </View>
    </View>
 </div>
 
    <div>
    <h2> Result Bootcamp Berbayar </h2>
    <View style={{flexDirection: "row", justifyContent:"space-around"}}>
      <View style= {{height: 200, width: 170, backgroundColor:"white"}}>
      <img
      className="h-8 w-auto"
      src="./assets/images/codeid.png"
      alt="Workflow"
    />

    <h3> NodeJS Full Stack </h3>
    <h4> Build Rest API With NodeJS </h4>
    <h4> Durasi : 3 Bulan </h4>
    <h4> Pembelajaran : Online / Offline </h4>
    <Link to="talent" className="text-base font-medium text-gray-500 hover:text-gray-900">
       Add To Chart
     </Link>
      </View>
   
      <View style= {{height: 200, width: 170, backgroundColor:"white"}}>
      <img
      className="h-8 w-auto"
      src="./assets/images/codeid.png"
      alt="Workflow"
    />

    <h3> NodeJS Full Stack </h3>
    <h4> Build Rest API With NodeJS </h4>
    <h4> Durasi : 3 Bulan </h4>
    <h4> Pembelajaran : Online / Offline </h4>
    <Link to="talent" className="text-base font-medium text-gray-500 hover:text-gray-900">
       Add To Chart
     </Link>
      </View>

      <View style= {{height: 200, width: 170, backgroundColor:"white"}}>
      <img
      className="h-8 w-auto"
      src="./assets/images/codeid.png"
      alt="Workflow"
    />

    <h3> NodeJS Full Stack </h3>
    <h4> Build Rest API With NodeJS </h4>
    <h4> Durasi : 3 Bulan </h4>
    <h4> Pembelajaran : Online / Offline </h4>
    <Link to="talent" className="text-base font-medium text-gray-500 hover:text-gray-900">
       Add To Chart
     </Link>
      </View>
    </View>
</div>
    

    <div className='App'>
    <h2>Top Bootcamp Ragular Student NodeJS</h2>
    <h2><b>Testimonial</b></h2>
    <motion.div className='carousel' whileTap={{cursor:"grabbing"}}>
        <motion.div drag='x' dragConstraints={{right: 0}} className='inner-carousel'>
        {image.map(image => {
            return(
            <motion.div className='item' key={image}>
                <img src={image} alt="">

                </img>
            </motion.div>
            )
        })}
        </motion.div>
    </motion.div>
    </div>
    </div>
    )
}
