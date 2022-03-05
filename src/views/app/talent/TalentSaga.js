import React, { Fragment, useState, useEffect } from "react";
import apiTalent from "../../../api/api-talent";
import config from "../../../config/config";
import Page from "../../../component/commons/Page";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
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

const batch_status = ["idle", "placement", "trial"];

export default function TalentSaga() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { talents } = useSelector((state) => state.talentState);

    // search
    const [listBatches, setListBatches] = useState([]);
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
                    <div className="flex items-baseline font-semibold justify-center mt-5">
                        <p className="text-xs mx-2 py-1">Search by Category</p>
                        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 ">
                            <input
                                type="text"
                                placeholder="batch, technology, triner..."
                                onChange={(event) => {
                                    setSearch(event.target.value);
                                }}
                                className="form-control relative w-48 block px-2 py-0.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                            />
                            <select
                                name="batch_status"
                                id="batch_status"
                                // onChange={handleOnChange("select")}
                                className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-0.5 w-24 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500"
                                aria-label=".form-select-sm example"
                            >
                                <option>Status</option>
                                {(batch_status || []).map((value, index) => (
                                    <option
                                        className="capitalize"
                                        value={value}
                                        key={index}
                                    >
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {loading === true ? (
                        <table className="min-w-full mt-4">
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
                                                    <div>
                                                        {
                                                            data.tale_status_timeline
                                                        }
                                                    </div>
                                                    <div className="text-red-500">
                                                        {data.tale_status_date}
                                                    </div>
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
