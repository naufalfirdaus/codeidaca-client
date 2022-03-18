import React, { useEffect, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import TestimonialItem from "./TestimonialsItem";
import config from "../../config/config";
import apiTestimonials from "../../api/api-testimonials";
function ReactCardSlider(props) {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8];
    const [testi, setTesti] = useState([]);
    useEffect(() => {
        apiTestimonials.findBySql().then((data) => {
            setTesti(data);
        });
    }, []);

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollTop = slider.scrollTop + 500;
    };
    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollTop = slider.scrollTop - 500;
    };
    return (
        <div
            id="main-slider"
            className="container w-[90%] h-[400px] mt-4 relative flex items-center text-center  "
        >
            
            <ChevronDownIcon
                className="w-8 bg-amber-600 rounded-[100%] left-0 absolute opacity-[0.5] hover:opacity-[1] cursor-pointer ml-2 "
                onClick={slideLeft}
            />

            <div id="slider" className="  ">
                {testi &&
                    testi.map((data) => (
                        <div className=" w-[278px] h-[280px] rounded-lg inline-block ml-[5px] mr-[5px] shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5  ">
                            <TestimonialItem
                                name={data.user_name}
                                designation={data.tale_position}
                                userImg={`${config.urlImage}/${data.tale_photo}`}
                                rating={data.cure_rating}
                                bootcamp={data.tale_bootcamp}
                                testimonial={data.cure_review}
                            />
                        </div>
                    ))}
            </div>
            <ChevronUpIcon
                className="w-8 bg-amber-600 rounded-[100%] right-0 absolute opacity-[0.5] hover:opacity-[1] cursor-pointer mr-2 "
                onClick={slideRight}
            />
        </div>
    );
}

export default ReactCardSlider;
