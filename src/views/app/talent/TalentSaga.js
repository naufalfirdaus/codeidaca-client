import React, { Fragment, useState, useEffect } from "react";
import apiTalent from "../../../api/api-talent";
import config from "../../../config/config";
import Page from "../../../component/commons/Page";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { doGetTalentRequest } from "../../../redux-saga/actions/TalentAction";

import {
    DotsVerticalIcon,
    DuplicateIcon,
    PhotographIcon,
    PencilAltIcon,
    TrashIcon,
    UserAddIcon,
    SearchIcon,
    ChevronRightIcon,
} from "@heroicons/react/solid";

const columns = [
    { name: "Full Name" },
    { name: "Technologi" },
    { name: "Batch" },
    { name: "Periode" },
    { name: "Triner" },
    { name: "Status" },
];

export default function TalentSaga() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { talents } = useSelector((state) => state.talentState);

    const [search, setSearch] = useState("");

    // fase didmount
    useEffect(() => {
        dispatch(doGetTalentRequest());
        setLoading(true);
    }, []);

    return (
        <Page title="talent" titleButton="back">
            <div className="hidden mt-0 sm:block">
                <div className="align-middle inline-block min-w-full border-b border-gray-200">
                    <div className="flex items-baseline font-semibold justify-center">
                        <p className=" m-4 text-gray-500  ">
                            Search By Category
                        </p>
                        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 ">
                            <SearchIcon className="w-5 h-8 mb-3 absolute ml-3 items-center  " />
                            <input
                                type="text"
                                placeholder="batch, technology, triner..."
                                onChange={(event) => {
                                    setSearch(event.target.value);
                                }}
                                className="pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl mb-4 w-80 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                            />
                        </div>
                    </div>

                    {loading === true ? (
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-t border-gray-200">
                                    {(columns || []).map((col, index) => (
                                        <th
                                            key={index}
                                            className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            <span className="lg:pl-2">
                                                {col.name}
                                            </span>
                                        </th>
                                    ))}
                                    <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {talents &&
                                    // eslint-disable-next-line array-callback-return
                                    talents
                                        // eslint-disable-next-line array-callback-return
                                        .filter((data) => {
                                            if (search === "") {
                                                return data;
                                            } else if (
                                                data.tale_fullname
                                                    .toLowerCase()
                                                    .includes(
                                                        search.toLowerCase()
                                                    )
                                            ) {
                                                return data;
                                            }
                                            if (search === "") {
                                                return data;
                                            } else if (
                                                data.tale_bootcamp
                                                    .toLowerCase()
                                                    .includes(
                                                        search.toLowerCase()
                                                    )
                                            ) {
                                                return data;
                                            }
                                        })
                                        .map((data) => (
                                            <tr key={data.tale_id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img
                                                                className="h-10 w-10 rounded-full"
                                                                src={`${config.urlImage}/${data.tale_photo}`}
                                                                alt={`${data.tale_id}`}
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {
                                                                    data.tale_fullname
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 justify-center whitespace-nowrap text-sm text-gray-900 text-justify">
                                                    {data.tale_bootcamp}
                                                </td>
                                                <td className="px-6 py-4 justify-center whitespace-nowrap text-sm text-gray-900 text-justify">
                                                    {data.talent_batches.map(
                                                        (taba) => (
                                                            <div>
                                                                {
                                                                    taba
                                                                        .taba_batch
                                                                        .batch_name
                                                                }
                                                            </div>
                                                        )
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 justify-center whitespace-nowrap text-sm text-gray-900 text-justify">
                                                    {data.talent_batches.map(
                                                        (taba) => (
                                                            <div>
                                                                <div>
                                                                    {
                                                                        taba
                                                                            .taba_batch
                                                                            .batch_start_date
                                                                    }
                                                                </div>
                                                                <div className="text-red-500">
                                                                    {
                                                                        taba
                                                                            .taba_batch
                                                                            .batch_end_date
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 justify-center whitespace-nowrap text-sm text-gray-900 text-justify">
                                                    {data.talent_batches.map(
                                                        (taba) => (
                                                            <div>
                                                                {
                                                                    taba
                                                                        .taba_batch
                                                                        .batch_inst
                                                                        .inst_name
                                                                }
                                                            </div>
                                                        )
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 justify-center whitespace-nowrap text-sm text-gray-900 text-justify">
                                                    {data.tale_status_timeline}
                                                </td>

                                                <td className="pr-6">
                                                    <Link to="/app/talent/detailtalent/:id">
                                                        <ChevronRightIcon className="w-5 h-5 cursor-pointer" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                            </tbody>
                        </table>
                    ) : (
                        <button className="bg-blue-600 p-3 rounded-full flex space-x-3 mt-5">
                            <div className=" w-5 h-5 bg-blue-400 rounded-full animate-bounce "></div>
                            <div className=" w-5 h-5 bg-blue-400 rounded-full animate-bounce "></div>
                            <div className=" w-5 h-5 bg-blue-400 rounded-full animate-bounce "></div>
                        </button>
                    )}
                </div>
            </div>
        </Page>
    );
}
