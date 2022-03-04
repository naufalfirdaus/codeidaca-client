import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import {
    ClockIcon,
    CursorClickIcon,
    HeartIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import Feature from "./FeatureItem";

function Features() {
    return (
        <section
            className="container mt-24 flex flex-col items-center"
            id="feature"
        >
            <h2 className="text-[32px] font-bold text-center sm:text-left ">
                Product was Built Specifically for You
            </h2>

            <hr className="bg-blue-100 h-1 w-[50%] mt-3 rounded-full animate-pulse items-center self-center justify-center text-center "></hr>

            <div
                className="mt-20 grid sm:grid-cols-1 lg:grid-cols-3 gap-16"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <div>
                    <Feature
                        Icon={CursorClickIcon}
                        title="Need Talent ?"
                        iconBgColor="#92A9BD"
                        description="While most people enjoy casino gambling,"
                        potoni="https://ascendantrecruitment.co.uk/blog/wp-content/uploads/2017/03/person-search-small.jpg"
                        width="100%"
                    />
                    <button className="primary-button mt-14 flex justify-center items-center">
                        Get Started
                        <ChevronRightIcon className="w-8" />
                    </button>
                </div>
                <div>
                    <Feature
                        Icon={UsersIcon}
                        iconBgColor="#92A9BD"
                        title="we Are Hiring"
                        description="While most people enjoy casino gambling,"
                        potoni="https://img.freepik.com/free-vector/megaphone-with-speech-bubble-we-are-hiring-join-our-team-announcement-lettering-it_384372-290.jpg?size=626&ext=jpg"
                        width="full"
                        potoalt="hiring"
                    />
                    <button className="primary-button mt-14 flex justify-center items-center ">
                        Get Started
                        <ChevronRightIcon className="w-8" />
                    </button>
                </div>
                <div>
                    <Feature
                        Icon={HeartIcon}
                        iconBgColor="#92A9BD"
                        title="Join Bootcamp"
                        description="While most people enjoy casino gambling,"
                        potoni="https://t4.ftcdn.net/jpg/04/06/41/35/360_F_406413553_RbHZhBnKHsBNwp9xhFhZDvjxIzH7CkUU.jpg"
                        width="100%"
                        potoalt="bootcamp"
                    />
                    <button className="primary-button mt-14 flex justify-center items-center ">
                        Get Started
                        <ChevronRightIcon className="w-8" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Features;
