import React, { Fragment, useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Popover, Dialog, Menu, Transition } from "@headlessui/react";
import {
    AnnotationIcon,
    ChatAlt2Icon,
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    QuestionMarkCircleIcon,
    ReplyIcon,
    SparklesIcon,
    TrashIcon,
    TrendingUpIcon,
    UserGroupIcon,
    UsersIcon,
    SelectorIcon,
    XIcon,
    ChevronLeftIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { doSignoutRequest } from "../../redux-saga/actions/User";
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
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
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
