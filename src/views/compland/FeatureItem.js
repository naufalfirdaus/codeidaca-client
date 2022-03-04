import React from "react";

function FeatureItem({
    Icon,
    iconBgColor,
    title,
    description,
    potoni,
    potoalt,
    width,
}) {
    return (
        <div className="flex flex-col text-center sm:text-left">
            <div
                style={{ background: `${iconBgColor}` }}
                className="w-[100%] rounded-xl m-auto flex justify-center items-center drop-shadow-md sm:ml-0 transform transition duration-500 hover:scale-110 "
            >
                <div className="flex flex-auto m-0 p-0 h-[200px]  "> 
                <img src={potoni} alt={potoalt} width={width} className=" rounded-lg cursor-pointer animate-pulse  "></img>
                </div>
            </div>
            <div>
                <h4 className="mt-6 font-semibold text-2xl">{title}</h4>
                <p className="text-base mt-2">{description}</p>
            </div>
        </div>
    );
}

export default FeatureItem;
