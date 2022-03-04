import React from "react";

function OurPartners() {
    return (
        <div
            className=" mt-28"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            id="aboutus"
        >
            <div className=" m-auto p-5 flex items-center flex-col md:flex-row justify-between bg-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-lg">
                <div className="text-center md:text-left md:max-w-[55%] md:mx-6 lg:mx-10">
                    <h3 className="text-[32px] font-semibold leading-[150%] text-gray-600 text-left">
                        Our Partners
                    </h3>
                    <hr className="bg-gray-200 h-1 w-[40%] rounded-full"></hr>
                    <div className="text-gray-500 mt-3 text-justify">
                        <p>
                            Our team is experienced in product implementation
                            and application development, no matter how big or
                            small the project is. We have been delivering our
                            services for more than 15 years, with complete
                            knowledge and understanding of our client's needs.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4 text-center md:text-left md:max-w-[55%] md:mx-6 lg:mx-10 sm:justify-center ">
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] transform transition duration-500 hover:scale-110 "
                        src="./assets/images/mercu.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] transform transition duration-500 hover:scale-110 "
                        src="./assets/images/telkom.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] transform transition duration-500 hover:scale-110 "
                        src="./assets/images/itb.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] transform transition duration-500 hover:scale-110 "
                        src="./assets/images/pakuan.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] transform transition duration-500 hover:scale-110 "
                        src="./assets/images/upn.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] transform transition duration-500 hover:scale-110 "
                        src="./assets/images/upn.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] transform transition duration-500 hover:scale-110 "
                        src="./assets/images/pakuan.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] transform transition duration-500 hover:scale-110 "
                        src="./assets/images/telkom.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default OurPartners;
