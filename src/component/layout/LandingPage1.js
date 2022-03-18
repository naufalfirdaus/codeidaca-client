import React, { Fragment, useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Popover, Menu, Transition } from "@headlessui/react";
import {
    ChatAlt2Icon,
    MenuIcon,
    QuestionMarkCircleIcon,
    TrendingUpIcon,
    UserGroupIcon,
    XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { doSignoutRequest } from "../../redux-saga/actions/User";
import Hero from "../../views/compland/Hero";
import Banner from "../../views/compland/Banner";
import Features from "../../views/compland/Features";
import Footer from "../../views/compland/Footer";
import OurInstructorSaga from "../../views/compland/OurInstructorSaga";
import OurPartners from "../../views/compland/OurPartners";
import Portofolio from "../../views/compland/Portofolio";
import "./darkmode.css";
import Loaders from "../../views/loader/Loaders";
import UpBtn from "../../views/compland/UpBtn";
import ModernSlider from "../../views/compland/ModernSlider";

const solutions = [
    {
        name: "Company Training",
        description: "Upgrade your employees skill with latest technology.",
        href: "#",
        icon: TrendingUpIcon,
    },
    {
        name: "Partner With Us",
        description: ".",
        href: "#",
        icon: UserGroupIcon,
    },
    {
        name: "Live Chat",
        description: "Need information, contact live chat with us",
        href: "#",
        icon: ChatAlt2Icon,
    },
    {
        name: "Knowledge Base",
        description:
            "Connect with third-party tools that you're already using.",
        href: "#",
        icon: QuestionMarkCircleIcon,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function LandingPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const dispatch = useDispatch();
    const { isLoggedIn, userProfile } = useSelector((state) => state.userState);

    const onSignout = () => {
        dispatch(doSignoutRequest());
        navigate(from, { replace: true });
    };

    const [Loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });

    // window.addEventListener("scroll", function () {
    //     const header = document.querySelector("header");
    //     header.classList.toggle("sticky", window.scrollY > 0);
    // });

    // const sticky = () => {
    //     var navbar = document.getElementById("header");
    //     navbar.classList.toggle("sticky", window.screenY > 0);
    // };
    return (
        <div className=" scroll-smooth ">
            {Loading === true ? (
                <Loaders />
            ) : (
                <div data-aos="fade-up">
                    <div>
                        <main>
                            <div >
                                <Outlet />
                                <Hero />
                                <UpBtn />
                                <Features />
                                <Banner />
                                <ModernSlider />
                                <OurInstructorSaga />
                                <OurPartners />
                                <Portofolio />
                                <Footer />
                            </div>
                        </main>

                    </div>
                </div>
            )}
        </div>
    );
}
