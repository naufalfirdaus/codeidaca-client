import React, { useState, useEffect } from "react";
import Sliders from "react-slick";
import "../../App.css";
import config from "../../config/config";
import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import TestimonialsItem from "./TestimonialsItem";
import { useDispatch, useSelector } from "react-redux";
import { doGetTestimoniRequest } from "../../redux-saga/actions/TestimoniAction";

function SampleNextArrow({ onClick }) {
    return (
        <div
            className=" text-3xl px-[5px] py-[5px] w-[40px] flex absolute top-[170px] text-gray-700 right-[20px] hover:text-gray-100 bg-gray-300 hover:bg-gray-400 z-20 rounded-full text-center cursor-pointer"
            onClick={onClick}
        >
            <ChevronRightIcon />
        </div>
    );
}

function SamplePrevArrow({ onClick }) {
    return (
        <div
            className="text-3xl px-[5px] py-[5px] w-[40px] flex absolute top-[170px] text-gray-700 hover:text-gray-100 left-[20px] z-20 bg-gray-300 hover:bg-gray-400 text-center rounded-full cursor-pointer"
            onClick={onClick}
        >
            <ChevronLeftIcon />
        </div>
    );
}

function EmptyArrow() {
    return <div> </div>;
}
function ModernSlider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const dispatch = useDispatch();
    const { testi } = useSelector((state) => state.testimoniState);
    useEffect(() => {
        dispatch(doGetTestimoniRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => (
            <div>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: (current, next) => (
            <div
                className={current === slideIndex ? "dots dots-active" : "dots"}
            ></div>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow: <EmptyArrow />,
                    prevArrow: <EmptyArrow />,
                },
            },
        ],
    };

    return (
        <section className=" mt-24 flex flex-col items-center" id="feature">
            <h2 className="text-[32px] font-bold text-center sm:text-left ">
                What They Feel
            </h2>
            <hr className="bg-blue-100 h-1 w-[30%] mt-3 rounded-full animate-pulse"></hr>
            <p className="font-medium mt-4 max-w-lg text-center">
                We are always on the lookout for all levels of software
                developers - from junior to senior developers with all range of
                skills.
            </p>

            <div className="container mt-6">
                <div className=" w-full h-[400px]">
                    <Sliders {...settings}>
                        {testi &&
                            testi.map((data, index) => (
                                <div
                                    className={
                                        index === slideIndex
                                            ? "slides slides-active"
                                            : "slides"
                                    }
                                    key={index}
                                >
                                    <TestimonialsItem
                                        name={data.user_name}
                                        designation={data.tale_position}
                                        userImg={`${config.urlImage}/${data.tale_photo}`}
                                        rating={data.cure_rating}
                                        bootcamp={data.tale_bootcamp}
                                        testimonial={data.cure_review}
                                    />
                                </div>
                            ))}
                    </Sliders>
                </div>

            </div>
            <Link to="/testimoni/viewall">
                    <button
                        type="button"
                        className=" text-gray-700 flex justify-center items-center mt-32 "
                    >
                        View All
                        <ChevronRightIcon className="w-8" />
                    </button>
                </Link>
        </section>
        
    );
}

export default ModernSlider;
