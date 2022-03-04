/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, Fragment } from "react";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

function Hero() {
    const [current, setCurrent] = useState(0);
    // const length = slides.length;
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    let [categories] = useState({
        NodeJs: [
            {
                id: 1,
                title: "https://career.bsi.ac.id/asset/img/gambar1626423882.jpeg",
                date: "jan 8",
            },
        ],
        Java: [
            {
                id: 2,
                title: "https://media-exp1.licdn.com/dms/image/C5622AQHUAOMrnOzFYg/feedshare-shrink_2048_1536/0/1644290778868?e=1648080000&v=beta&t=gIRvKdYtDPf49xmXMJCzq3po4ROT-u7-9XFsamYomSE",
                date: "Jan 7",
            },
        ],
        Golang: [
            {
                id: 3,
                title: "https://i1.wp.com/codeacademy.co.id/wp-content/uploads/2021/04/Bootcamp-golang-2.png?resize=657%2C929&ssl=1",
                date: "4d ago",
            },
        ],
    });
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 backdrop-blur-3xl bg-black opacity-30" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 text-center mb-3"
                                >
                                    Available Bootcamp Now
                                </Dialog.Title>
                                {/* <section className="slider ">
                                    {SliderData.map((slide, index) => {
                                        return (
                                            <div className="w-auto flex flex-wrap flex-row">
                                                <img
                                                    src={slide.image}
                                                    alt="hero"
                                                    width="50%"
                                                />
                                            </div>
                                        );
                                    })}
                                </section> */}
                                <div className="md:max-w-full">
                                    <Tab.Group>
                                        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                                            {Object.keys(categories).map(
                                                (category) => (
                                                    <Tab
                                                        key={category}
                                                        className={({
                                                            selected,
                                                        }) =>
                                                            classNames(
                                                                "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                                                                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                                                                selected
                                                                    ? "bg-white shadow"
                                                                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                                            )
                                                        }
                                                    >
                                                        {category}
                                                    </Tab>
                                                )
                                            )}
                                        </Tab.List>
                                        <Tab.Panels className="mt-2">
                                            {Object.values(categories).map(
                                                (posts, idx) => (
                                                    <Tab.Panel
                                                        key={idx}
                                                        className={classNames(
                                                            "bg-white rounded-xl p-3",
                                                            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                                                        )}
                                                    >
                                                        <ul>
                                                            {posts.map(
                                                                (post) => (
                                                                    <li
                                                                        key={
                                                                            post.id
                                                                        }
                                                                        className="relative p-3 rounded-md hover:bg-coolGray-100"
                                                                    >
                                                                        <h3 className="text-sm font-medium leading-5">
                                                                            {
                                                                                <div className=" flex justify-center items-center w-auto rounded-lg ">
                                                                                    <img
                                                                                        src={
                                                                                            post.title
                                                                                        }
                                                                                        alt="hero"
                                                                                        width="60%"
                                                                                        className=" rounded-md "
                                                                                    />
                                                                                </div>
                                                                            }
                                                                        </h3>

                                                                        <a
                                                                            href={
                                                                                post.title
                                                                            }
                                                                            className={classNames(
                                                                                "absolute inset-0 rounded-md",
                                                                                "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400",
                                                                                " items "
                                                                            )}
                                                                            target="blank"
                                                                        >
                                                                            <button className="mt-3 inline-flex justify-center px-2 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 animate-pulse">
                                                                                Detile
                                                                                <ChevronRightIcon className="w-5" />
                                                                            </button>
                                                                        </a>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </Tab.Panel>
                                                )
                                            )}
                                        </Tab.Panels>
                                    </Tab.Group>
                                </div>

                                <div className="mt-4 flex justify-center items-center">
                                    <Link to="bootcamp">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={closeModal}
                                        >
                                            Join bootcamp
                                        </button>
                                    </Link>

                                    <button
                                        type="button"
                                        className="ml-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
            <main
                className="container md:flex flex-row-reverse justify-between items-center "
                id="hero"
            >
                <div className="md:max-w-[47%]">
                    <img src="./assets/images/hr4.png" alt="hero" />
                </div>

                {/* text section */}
                <div className="text-center sm:text-left md:max-w-[40%]">
                    <h1 className="font-bold text-4xl leading-[60px]">
                        We Code!<span><div>What is Code Academy?</div></span>
                    </h1>
                    <p className="mt-4 text-[18px] leading-[28px] font-normal">
                        CODE.ID is a software development service company that
                        focuses on helping clients turn their best ideas into a
                        product, application, or website. We also provide IP
                        Products, including Activo for Fixed Asset Management
                        and Klaim for Claim System Management.
                    </p>
                    <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8 flex-wrap">
                        <button className="primary-button flex justify-center items-center  ">
                            Get Started
                            <ChevronRightIcon className="w-8 " />
                        </button>

                        <button
                            type="button"
                            onClick={openModal}
                            className=" secondary-button flex justify-center items-center "
                        >
                            Looking for
                            <ChevronRightIcon className="w-8 " />
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Hero;
