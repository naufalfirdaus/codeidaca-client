import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import StarIconOutlined from "@heroicons/react/outline/StarIcon";

function CardAllTesti({ nama, bootcamp, testimoni, photo, rating }) {
    var ratings = [];
    for (var i = 0; i < 5; i++)
        ratings.push(
            i < rating ? <StarIcon key={i} /> : <StarIconOutlined key={i} />
        );
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 mt-8 text-center p-4 ">
                <img
                    className="mb-3 w-24 h-24 rounded-full shadow-lg"
                    src={photo}
                    alt="Bonnieimage"
                />
                <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {nama}
                </h3>
                <div>
                    <span className="text-yellow-400 flex h-8">{ratings}</span>
                </div>
                <span className="text-sm text-blue-700 dark:text-gray-400 mt-3 font-semibold ">
                    {bootcamp}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 italic h-[120px] mt-4">
                    "{testimoni}"
                </span>
            </div>
        </div>
    );
}

export default CardAllTesti;
