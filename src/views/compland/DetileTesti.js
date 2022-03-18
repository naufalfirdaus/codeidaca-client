import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/outline";
import CardAllTesti from "./CardAllTesti";
import config from "../../config/config";
import apiTestimonials from "../../api/api-testimonials";

function DetileTesti() {
    const [testi, setTesti] = useState([]);

    useEffect(() => {
        apiTestimonials.findBySql().then((data) => {
            setTesti(data);
        });
    }, []);
    return (
        <div className="container">
            <Link
                to="/"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
            >
                <ChevronLeftIcon className="w-5 font-semibold " />
                Back
            </Link>
            <div className="mt-4 min-w-[80vw] justify-center md:gap-4 md:min-w-full grid gap-8 md:grid-cols-4 ">
                {testi &&
                    testi.map((data) => (
                        <CardAllTesti
                            photo={`${config.urlImage}/${data.tale_photo}`}
                            nama={data.user_name}
                            bootcamp={data.tale_bootcamp}
                            testimoni={data.cure_review}
                            rating={data.cure_rating}
                        />
                    ))}
            </div>
        </div>
    );
}

export default DetileTesti;
