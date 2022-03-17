import React, { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";
import StarIconOutlined from "@heroicons/react/outline/StarIcon";
import config from "../../config/config";
import apiTestimonials from "../../api/api-testimonials";

function TestimonialsItem({
    rating,
    testimonial,
    userImg,
    name,
    designation,
    bootcamp,
}) {
    var ratings = [];
    for (var i = 0; i < 5; i++)
        ratings.push(
            i < rating ? <StarIcon key={i} /> : <StarIconOutlined key={i} />
        );

    const [testi, setTesti] = useState([]);

    useEffect(() => {
        apiTestimonials.findAll().then((data) => {
            setTesti(data);
        });
    }, []);
    return (
        <div className="border rounded-md max-w-md ">
            <div className="px-7 pt-7 pb-6">
                <div className=" text-yellow-400 flex h-8">{ratings}</div>
                <div className=" flex h-8 mt-3">
                    <h2>Bootcamp : {bootcamp}</h2>
                </div>

                <p className="text-left pt-4 h-[168px] italic ">
                    " {testimonial} "
                </p>

                <div>
                    <div className="mt-4 flex items-center">
                        <img
                            className=" w-14 h-14 border border-[#BDBDBD] bg-black rounded-full object-cover"
                            src={userImg}
                            alt=""
                        />
                        <div className="text-left ml-[14px]">
                            <h6 className="text-primary font-bold">{name}</h6>
                            <p className="text-sm font-light text-gray-600">
                                {designation}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsItem;
