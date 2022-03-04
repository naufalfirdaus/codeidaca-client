import React from "react";

function InstructorItem({ imgSrc, text, nameInst }) {
    return (
        <div className="max-w-md flex items-center even:flex-row-reverse md:flex-row-reverse md:first:flex-row md:last:flex-row">
            <img
                src={imgSrc}
                alt=""
                width="98px"
                className=" rounded-[100%] bg-cover border-4 border-orange-600 transform transition duration-500 hover:scale-110 cursor-pointer  "
            />

            <div className="flex flex-col">
                <div className="shadow-lg px-8 py-3 mx-2 max-w-[270px] md:max-w-none text-left rounded-full flex justify-center items-center mt-1.5 ">
                    <p className="text-blue-600 font-semibold">{nameInst}</p>
                </div>
                <div className="shadow-lg px-8 py-3 mx-2 max-w-[270px] md:max-w-none text-left rounded-full flex justify-center items-center mt-1.5">
                    <p className="font-medium">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default InstructorItem;
