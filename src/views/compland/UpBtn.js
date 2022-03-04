import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";

function UpBtn() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 700) {
            setVisible(true);
        } else if (scrolled <= 700) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <Link
            to="hero"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
        >
            <div className={ visible ? "w-[45px] h-[45px] items-center text-center justify-center flex bottom-[20px] right-5 fixed z-10 cursor-pointer bg-red-400 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500  " : " bg-black "}  >
                <ChevronUpIcon
                    style={{ display: visible ? "inline" : "none" }}
                    onClick={scrollToTop}
                    className=" text-white "
                />
            </div>
        </Link>
    );
}

export default UpBtn;
