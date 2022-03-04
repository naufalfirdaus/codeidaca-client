import React from "react";

function Portofolio() {
    return (
        <div
            className=" mt-8"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
        >
            <div className=" m-auto p-5 flex items-center flex-col md:flex-row justify-between bg-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-lg">
                <div className="flex flex-wrap justify-between gap-1 text-center md:text-left md:max-w-[55%] md:mx-6 lg:mx-10 sm:justify-center  ">
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl transform transition duration-500 hover:scale-110"
                        src="./assets/images/mandiri.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl transform transition duration-500 hover:scale-110"
                        src="./assets/images/btpn.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl transform transition duration-500 hover:scale-110"
                        src="./assets/images/pruden.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl transform transition duration-500 hover:scale-110"
                        src="./assets/images/btpn.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl transform transition duration-500 hover:scale-110"
                        src="./assets/images/mega.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl transform transition duration-500 hover:scale-110"
                        src="./assets/images/btpn.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl transform transition duration-500 hover:scale-110"
                        src="./assets/images/allianz.png"
                        alt=""
                    />
                    <img
                        className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl transform transition duration-500 hover:scale-110"
                        src="./assets/images/mandiri.png"
                        alt=""
                    />
                </div>
                <div className="text-center md:text-left md:max-w-[55%] md:mx-6 lg:mx-10">
                    <h3 className="text-[32px] font-semibold leading-[150%] text-gray-600 text-left">
                        About Us
                    </h3>
                    <hr className="bg-gray-200 h-1 w-[30%] rounded-full"></hr>
                    <div className="text-gray-500 mt-4 text-justify">
                        <p className="mb-3">
                            We try to help our clients innovate and make ideas
                            come to life. We always listen to our client's
                            wishes and share our expertise, know-how, and
                            experiences to ensure your product is the best it
                            can be.
                        </p>
                        <hr className="bg-gray-200 h-1 rounded-full"></hr>
                        <p className="mt-3">
                            One thing that sets us apart from others is our
                            passionate team. Our business analysts and
                            developers always ensure that we develop
                            high-quality software. All in all, we aim to have
                            long-term relationships with all our clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portofolio;
