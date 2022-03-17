import React, { useEffect } from "react";
import InstructorItem from "./InstructorItem";
import config from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { doGetInstructorRequest } from "../../redux-saga/actions/InstructorAction";
function OurInstructor() {
    const dispatch = useDispatch();
    const { instructor } = useSelector((state) => state.instructorState);
    useEffect(() => {
        dispatch(doGetInstructorRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <section className="container mt-[180px] text-center">
                <h2 className="text-[32px] font-bold " id="triners">
                    Our Instructor
                </h2>
                <div className="text-center flex flex-col items-center">
                    <hr className="bg-blue-100 h-1 w-[30%] mt-3 rounded-full animate-pulse items-center self-center justify-center text-center "></hr>
                </div>
                <p className="mt-4 max-w-xl m-auto">
                    Do you require some help for your project: Conception
                    workshop, prototyping, marketing strategy, landing page,
                    Ux/UI?
                </p>

                <div
                    className="mx-auto mt-8 max-w-5xl grid md:gap-8 grid-cols-1 md:grid-cols-2"
                    data-aos="zoom-out-up"
                    data-aos-duration="3000"
                >
                    {instructor &&
                        instructor.map((data) => (
                            <InstructorItem
                                imgSrc={`${config.urlImage}/${data.inst_photo}`}
                                text={data.inst_about}
                                nameInst={data.inst_name}
                            />
                        ))}
                </div>

                <button className="primary-button mt-20">
                    Contact our Expert
                </button>
            </section>
        </div>
    );
}

export default OurInstructor;
