import React, { useEffect, useState } from "react";
import CardReview from '../../component/bootcamp/CardReview'
import config from "../../config/config";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { doGetTestimoniRequest } from "../../redux-saga/actions/Review";
import apiReview from '../../api/apiTesti'


function Review() {
    // const dispatch = useDispatch();
    // const [loading, setLoading] = useState(true);
    // const { list } = useSelector((state) => state.testimoniState);
    // useEffect(() => {
    //     dispatch(doGetTestimoniRequest());
    //     setLoading(true);
    // }, []);
    const [list, setTesti] = useState([]) 
     
    useEffect(() => {
        apiReview.findTesti().then(tes => {
          setTesti(tes)
          console.log(tes)
        })
      },[]) 

    return (
              <section
                  className="containerr mt-0 text-center flex flex-col items-center"
                  id="testimonial"
              >
                <div className='font-bold mt-10'>Testimonial</div>
                  <div
                      className="mt-12 min-w-[80vw] justify-center md:gap-4 md:min-w-full grid gap-8 md:grid-cols-5  "
                      data-aos="fade-up"
                      data-aos-duration="2000"
                  >
                      {Array.isArray(list) &&
                          list.map((data) => (
                              <CardReview
                                  name={data.user_name}
                                  designation={data.tale_position}
                                  userImg={"/img/profil.jpg"}
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
                              className=" text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 flex justify-center items-center px-4 py-2 "
                          >
                              View All
                              <ChevronRightIcon className="w-8 " />
                          </button>
                      </Link>
                  </div>
              </section>
              
    );
}

export default Review;