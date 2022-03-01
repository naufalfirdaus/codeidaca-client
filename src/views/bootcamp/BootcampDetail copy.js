import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faClock,
  faCheck,
  faCalendarDays,
  faCalendarPlus,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

//import redux needed
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doGetBootcampRequest } from "../../redux-saga/actions/CampDetailAction";
import { useLocation } from "react-router-dom";

export default function BootcampDetail() {
  let navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { bootcamps } = useSelector((state) => state.bootcampState);
  console.log(bootcamps);

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

  return (
    <>
      <div className="flex ">
        {(bootcamps || []).map((camp) => (
          <div className="w-full h-full">
            <div className="flex ">
              <div className="flex-1 flex flex-col ml-20 mt-10">
                <h1 className="font-bold text-3xl text-red-500">
                  {" "}
                  {camp.curriculum.curr_title}
                </h1>
                <p className="my-5">{camp.curriculum.curr_description}</p>
              </div>
              <div className="flex-1 flex items-center justify-center mt-10">
                <div className="border border-red-500 w-10/12 p-5 rounded-2xl">
                  <ReactPlayer
                    height="18rem"
                    width="100%"
                    class="rounded-2xl"
                    url="https://www.youtube.com/watch?v=eHge00_j1mI"
                    controls={true}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center bg-gradient-to-t from-white md:from-blue-50">
              <div class="mr-5 flex items-center my-10">
                <div className="mr-2 w-10 h-10 rounded-full outline-white bg-blue-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsers} class="w-5 h-5 text-white" />
                </div>
                <h1 className="font-semibold text-gray-700">
                  {camp.curriculum.curr_total_talents} talents
                </h1>
              </div>

              <div class="mr-5 flex items-center my-10">
                <div className="mr-2 w-10 h-10 rounded-full outline-white bg-blue-300 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    class="w-5 h-5 text-white"
                  />
                </div>
                <h1 className="font-semibold text-gray-700">
                  {camp.curriculum.curr_total_batch} batch
                </h1>
              </div>

              <div class="mr-5 flex items-center my-10">
                <div className="mr-2 w-10 h-10 rounded-full outline-white bg-blue-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faClock} class="w-5 h-5 text-white" />
                </div>
                <h1 className="font-semibold text-gray-700">
                  {camp.curriculum.curr_duration} Hari
                </h1>
              </div>

              <div class="mr-5 flex items-center my-10">
                <div className="mr-2 w-10 h-10 rounded-full outline-white bg-blue-300 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    class="w-5 h-5 text-white"
                  />
                </div>
                <h1 className="font-semibold text-gray-700">
                  {startDate} until {endDate}
                </h1>
              </div>
            </div>

            <div className="flex bg-blue-50">
              <div className="flex-1 flex flex-col ml-28 shadow-lg bg-white p-8 mr-10 rounded-2xl mb-10">
                <h1 className="font-bold text-2xl text-blue-600 mb-5">
                  What you'll learn
                </h1>
                {bootcamps &&
                  bootcamps.map((items) => (
                    <ul className="m-0 p-0 list-none flex flex-wrap my-5">
                      <li
                        className="w-3/6 mb-2.5 flex text-gray-700 items-center"
                        key={items.curriculum.curr_id}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          class="w-5 h-5 text-red-600 mr-2"
                        />
                        {items.curriculum.curr_tag}
                      </li>
                    </ul>
                  ))}
              </div>
              <div className="flex-1 flex flex-col mr-28 shadow-lg bg-white p-8 ml-10 rounded-2xl mb-10">
                <h1 className="font-bold text-2xl text-blue-600 mb-5">
                  Bootcamp Material
                </h1>
                {bootcamps[0].materi &&
                  bootcamps[0].materi.map((items) => (
                    <div className="w-full bg-white rounded-2xl my-2 ">
                      <Disclosure key={items.cuma_id}>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full px-4 py-2 text-sm text-gray-700  font-medium text-left bg-red-200 rounded-full hover:bg-red-300 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                              <ChevronUpIcon
                                className={`${
                                  open ? "transform rotate-180" : ""
                                } w-5 h-5 mr-2 text-red-600`}
                              />
                              <span>{items.cuma_title}</span>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700 ">
                              <ul className="ml-7 p-0 list-none">
                                <li className="mb-2.5">
                                  {items.cuma_subtitle}
                                </li>
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-blue-50 flex items-center justify-center">
              <div className="w-1/3 my-8">
                <button className="mb-8 w-full p-2.5 shadow-lg bg-red-600 text-white font-bold rounded-full hover:bg-red-700">
                  Apply Regular Bootcamp
                </button>
              </div>
            </div>

            {/* <h1 className="my-5 font-semibold text-2xl">Description</h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              quae itaque aliquid aspernatur, laborum aut iure eos provident
              saepe praesentium dolore autem delectus neque repellendus
              architecto eum veniam consequuntur ea.
            </p> */}

            <div className="flex ">
              <div className="flex-1 flex flex-col bg-red-100 pl-20 pr-10 py-10">
                <h1 className=" font-bold text-blue-600 text-2xl mb-5">
                  Persyaratan
                </h1>
                <ul className=" ml-5 mb-5 m-0 p-0 text-gray-700 list-disc">
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
              </div>
              <div className="flex-1 flex flex-col bg-gray-200 pr-20 pl-10 py-10">
                <h1 className=" font-bold  text-blue-600 text-2xl mb-5">
                  Benefit
                </h1>
                <ul className=" m-0 p-0 ml-5 text-gray-700 list-disc">
                  <li className="mb-2.5">Disediakan laptop</li>
                  <li className="mb-2.5">Makan gratis 3x sehari</li>
                  <li className=" mb-2.5">Sertifikat</li>
                  <li className=" mb-2.5">
                    Berkesempatan terlibat dalam proyek
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="flex items-center justify-center">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCalendarPlus}
                  class="w-6 h-6 mr-2 text-red-600"
                />
                Next Batch, April 2022
              </div>
              <div className=" flex items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  class="mr-2 w-6 h-6 text-red-600"
                />
                Sentul, Bogor, Jawa Barat
              </div>
              <div className=" flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  class="w-6 h-6 mr-2 text-red-600"
                />
                0813333333
              </div>
            </div> */}

            <div className="flex justify-center ">
              <div class="mr-5 flex items-center my-10">
                <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-500 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faCalendarPlus}
                    class="w-5 h-5 text-white"
                  />
                </div>
                <h1 className="font-semibold text-gray-700">
                  Next Batch, April 2022
                </h1>
              </div>

              <div class="mr-5 flex items-center my-10">
                <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-500 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    class="w-5 h-5 text-white"
                  />
                </div>
                <h1 className="font-semibold text-gray-700">
                  Sentul, Bogor, Jawa Barat
                </h1>
              </div>
              <div class="mr-5 flex items-center my-10">
                <div className="mr-2 w-10 h-10 rounded-full outline-white bg-red-500 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} class="w-5 h-5 text-white" />
                </div>
                <h1 className="font-semibold text-gray-700">0813333333</h1>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="my-5 w-7/12 flex flex-col border border-gray-600 bg-red-200 p-5 rounded-2xl">
                <h1 className="flex mb-5 font-bold text-blue-600 text-2xl">
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
                        <h1 className="font-bold text-gray-800">
                          {items.inst_name}
                        </h1>
                        <p className="text-gray-800">{items.inst_about}</p>
                        <div className="flex my-5 justify-end">
                          <div class="mr-2 flex items-center">
                            <div className="mr-2 w-10 h-10 rounded-full cursor-pointer outline-white bg-blue-600 flex items-center justify-center">
                              <FontAwesomeIcon
                                icon={faFacebookSquare}
                                className="text-white w-5 h-5"
                              />
                            </div>
                          </div>

                          <div class="mr-2 flex items-center">
                            <div className="mr-2 w-10 h-10 rounded-full cursor-pointer outline-white bg-sky-500 flex items-center justify-center">
                              <FontAwesomeIcon
                                icon={faTwitter}
                                className="text-white w-5 h-5"
                              />
                            </div>
                          </div>

                          <div class="mr-2 flex items-center">
                            <div className="mr-2 w-10 h-10 rounded-full cursor-pointer outline-white bg-pink-600 flex items-center justify-center">
                              <FontAwesomeIcon
                                icon={faInstagram}
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
          </div>
        ))}

        {/* <div className="flex flex-col w-7/12 h-fit p-5">
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

              <FontAwesomeIcon icon={faCalendarPlus} class="w-6 h-6 mr-2 text-red-600" />
              Next Batch, April 2022
            </div>
            <div className="mb-8 flex items-center">
            <FontAwesomeIcon icon={faLocationDot} class="mr-2 w-6 h-6 text-red-600" />
              Sentul, Bogor, Jawa Barat
            </div>
            <div className="mb-8 flex items-center">
            <FontAwesomeIcon icon={faPhone} class="w-6 h-6 mr-2 text-red-600" />
              0813333333
            </div>
            <button className="mb-8 w-full p-2.5 bg-red-600 text-white font-bold rounded-full hover:bg-red-700">
              Apply Regular Bootcamp
            </button>
     
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
            <h1 className="mb-2.5 font-bold">Benefit:</h1>
            <ul className=" m-0 p-0 list-none">
              <li className="mb-2.5">Disediakan laptop</li>
              <li className="mb-2.5">Makan gratis 3x sehari</li>
              <li className=" mb-2.5">Sertifikat</li>
              <li className=" mb-2.5">Berkesempatan terlibat dalam proyek</li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
}
