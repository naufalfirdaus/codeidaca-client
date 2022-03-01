import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ReactPlayer from "react-player";

//import redux needed
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doGetBootcampRequest } from "../../redux-saga/actions/CampDetailAction";
import { useLocation } from "react-router-dom";
import Loader from "../../component/loader/Loaders";

export default function BootcampDetail() {
  let navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { bootcamps } = useSelector((state) => state.bootcampState);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  });

  // useEffect(() => {
  //   dispatch(doGetBootcampRequest())
  // }, []);

  // phase componentDidMount, hanya di excute satu kali
  useEffect(() => {
    dispatch(doGetBootcampRequest(id));
  }, [id]);

  const getStartDate = bootcamps.map((items) => items.batch.batch_start_date); //2022-03-10
  const getEndDate = bootcamps.map((items) => items.batch.batch_end_date);
  const splitStartDate = getStartDate.toString().split("-");
  const splitEndDate = getEndDate.toString().split("-");
  const event = new Date(splitStartDate);
  const event1 = new Date(splitEndDate);
  const eventToString = event.toDateString();
  const event1ToString = event1.toDateString();
  const splitStartDate1 = eventToString.split(" ");
  const splitStartDate2 = event1ToString.split(" ");
  const mergeStartDate = [
    splitStartDate1[2],
    splitStartDate1[1],
    splitStartDate1[3],
  ];
  const mergeEndDate = [
    splitStartDate2[2],
    splitStartDate2[1],
    splitStartDate2[3],
  ];
  const startDate = mergeStartDate.join(" ");
  const endDate = mergeEndDate.join(" ");

  const event3 = new Date(event1.setMonth(event1.getMonth() + 3));
  const event3ToString = event3.toDateString();
  const splitStartDate3 = event3ToString.split(" ");
  const mergeNextBatch = [splitStartDate3[1], splitStartDate3[3]];
  const nextBatch = mergeNextBatch.join(" ");

  const tag =
    bootcamps && bootcamps.map((items) => items.curriculum.curr_tag.split(","));

  return (
    <>
      {Loading === true ? (
        <Loader />
      ) : (
        <div className="flex ">
          {(bootcamps || []).map((camp) => (
            <div className="w-full h-full m-8">
              <h1 className="font-bold text-3xl">
                {" "}
                {camp.curriculum.curr_name}
              </h1>
              <p className="my-5">{camp.curriculum.curr_title}</p>
              <div className="flex my-5">
                <div class="mr-5 flex items-center">
                  <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h1 className="font-semibold">
                    {camp.curriculum.curr_total_talents} talents
                  </h1>
                </div>

                <div class="mr-5 flex items-center">
                  <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <h1 className="font-semibold">
                    {camp.curriculum.curr_total_batch} batch
                  </h1>
                </div>

                <div class="mr-5 flex items-center">
                  <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#FFFFFF"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h1 className="font-semibold">
                    {camp.curriculum.curr_duration} Hari
                  </h1>
                </div>

                <div class="mr-5 flex items-center">
                  <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#FFFFFF"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h1 className="font-semibold">
                    {startDate} until {endDate}
                  </h1>
                </div>
              </div>
              <hr className="my-5 h-0.5 text-gray-600 bg-gray-600" />
              <div>
                <h1 className="font-semibold text-2xl">What you'll learn</h1>
                <ul className="m-0 p-0 list-none flex flex-wrap my-5">
                  {(tag[0] && tag[0]).map((value, index) => (
                    <li
                      className="w-3/6 mb-2.5 flex"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="font-semibold text-2xl">Bootcamp Material</h1>
                {bootcamps[0].materi &&
                  bootcamps[0].materi.map((items) => (
                    <div className="w-full bg-white rounded-2xl my-2">
                      <Disclosure key={items.cuma_id}>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full px-4 py-2 text-sm font-medium text-left text-black bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                              <ChevronUpIcon
                                className={`${
                                  open ? "transform rotate-180" : ""
                                } w-5 h-5 mr-2 text-red-600`}
                              />
                              <span>{items.cuma_title}</span>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-black">
                              <ul className="ml-7 p-0 list-none">
                                {/* <li className="mb-2.5">{items.cuma_subtitle}</li> */}
                                {items.cuma_subtitle.split(",").map((tag) => (
                                  <li className="mb-2.5">{tag}</li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ))}
              </div>
              <h1 className="my-5 font-semibold text-2xl">Description</h1>
              <p className="">
                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              quae itaque aliquid aspernatur, laborum aut iure eos provident
              saepe praesentium dolore autem delectus neque repellendus
              architecto eum veniam consequuntur ea. */}
                {camp.curriculum.curr_description}
              </p>
              <div
                className="my-5 flex flex-col border border-solid border-gray-600 bg-red-200 p-5 rounded-2xl"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h1 className="flex mb-5 font-semibold text-2xl">
                  Instructors
                </h1>
                {bootcamps[0].instructor &&
                  bootcamps[0].instructor.map((items) => (
                    <div className="flex">
                      {/* img container */}
                      <div className="flex pr-1.5 flex-shrink-0">
                        <img
                          className="w-40 h-40 rounded-full"
                          src={`/assets/images/` + items.inst_photo}
                          alt=""
                        />
                      </div>
                      {/* info container */}
                      <div className="ml-3 pl-1.5">
                        <h1 className="font-bold">{items.inst_name}</h1>
                        <p>{items.inst_about}</p>
                        <div className="flex my-5 justify-end">
                          <div class="mr-2 flex items-center hover:scale-110">
                            <div
                              className="mr-2 w-10 h-10 rounded-full cursor-pointer outline-white bg-blue-600 flex items-center justify-center"
                              onClick={() =>
                                window.open(
                                  `https://www.linkedin.com/in/` +
                                    items.inst_linkedin,
                                  "_blank"
                                )
                              }
                            >
                              <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-white w-5 h-5"
                              />
                            </div>
                          </div>

                          <div class="mr-2 flex items-center hover:scale-110">
                            <div
                              className="mr-2 w-10 h-10 rounded-full cursor-pointer outline-white bg-sky-500 flex items-center justify-center"
                              onClick={() =>
                                window.open(
                                  `https://www.twitter.com/` +
                                    items.inst_twitter,
                                  "_blank"
                                )
                              }
                            >
                              <FontAwesomeIcon
                                icon={faTwitter}
                                className="text-white w-5 h-5"
                              />
                            </div>
                          </div>

                          <div class="mr-2 flex items-center hover:scale-110">
                            <div
                              className="mr-2 w-10 h-10 rounded-full cursor-pointer outline-white bg-red-600 flex items-center justify-center"
                              onClick={() =>
                                window.open(items.inst_youtube, "_blank")
                              }
                            >
                              <FontAwesomeIcon
                                icon={faYoutube}
                                className="text-white w-5 h-5"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
          {/* flex right */}
          <div className="flex flex-col w-7/12 h-fit p-5">
            <div className="flex-1 border border-solid border-gray-600 rounded-2xl p-5">
              <div className="">
                <ReactPlayer
                  height="15rem"
                  width="100%"
                  url="https://www.youtube.com/watch?v=eHge00_j1mI"
                  controls={true}
                />
              </div>
              <div className="my-5 mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#D2042D"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Next Batch, {nextBatch}
              </div>
              <div className="mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="#D2042D"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>{" "}
                Sentul, Bogor, Jawa Barat
              </div>
              <div className="mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#D2042D"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                0813333333
              </div>
              <button className="mb-8 w-full p-2.5 bg-red-600 text-white font-bold rounded-full hover:bg-red-700">
                Apply Regular Bootcamp
              </button>
              {/* Persyaratan */}
              <h1 className="mb-2.5 font-bold">Persyaratan :</h1>
              <ul className=" mb-5 m-0 p-0 list-none">
                <li className="mb-2.5">Usia maksimal 26 tahun</li>
                <li className="mb-2.5">Pendidikan SMK RPL/D3</li>
                <li className=" mb-2.5">
                  S1 Teknik Informatika/Sistem Informasi
                </li>
                <li className=" mb-2.5">
                  Memiliki passion di bidang pemrograman
                </li>
                <li className=" mb-2.5">Pengalaman dibidang RDBMS dan SQL</li>
                <li className=" mb-2.5">Mampu bekerja sama dalam team</li>
              </ul>

              {/* Benefit */}
              <h1 className="mb-2.5 font-bold">Benefit:</h1>
              <ul className=" m-0 p-0 list-none">
                <li className="mb-2.5">Disediakan laptop</li>
                <li className="mb-2.5">Makan gratis 3x sehari</li>
                <li className=" mb-2.5">Sertifikat</li>
                <li className=" mb-2.5">Berkesempatan terlibat dalam proyek</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
