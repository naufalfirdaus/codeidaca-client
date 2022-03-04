import React from "react";

function Banner() {
    return (
        <div className=" mt-28 ">
            <div
                className=" m-auto p-5 bg-gradient-to-r bg-gray-100 flex items-center flex-col md:flex-row justify-between shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-lg "
                data-aos="zoom-in-right"
                data-aos-duration="2000"
            >
                <div className="text-center md:text-left md:max-w-[55%] md:mx-6 lg:mx-10">
                    <h3 className="text-[32px] font-semibold leading-[150%] text-gray-500 text-left">
                        Trusted By Leading <h3>Brands And start up</h3>
                    </h3>
                </div>
                <img
                    className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl"
                    src="./assets/images/screen.png"
                    alt=""
                />
                <img
                    className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl"
                    src="./assets/images/screen.png"
                    alt=""
                />
                <img
                    className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl"
                    src="./assets/images/screen.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Banner;
