import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from 'react-redux';
import { doGetTalentDetailRequest } from '../../../redux-saga/actions/TalentDetail';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useParams } from "react-router-dom";

import {
    CalendarIcon,

} from '@heroicons/react/solid'
import TalentDetail from "./TalentDetail";

const talent_status = ['TRIAL', 'PLACEMENT']

export default function TalentPlacement(props) {

    const { id } = useParams()
    const dispatch = useDispatch()

    const { details } = useSelector((state) => state.talentDetailState)


    useEffect(() => {
        dispatch(doGetTalentDetailRequest(id))
    }, [id])

    return (

        <div>
            {(details || []).map((detail) =>
                <Transition appear show={props.isOpen} as={Fragment}>

                    <Dialog
                        as="div"
                        static
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={() => null}
                    >
                        <div className="min-h-screen  px-5 text-center">


                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                                className="inline-block h-screen  align-middle"
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


                                <div className="border-4 inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                        Talent Placement For {detail.talent.tale_fullname}
                                    </Dialog.Title>

                                    <div className="mt-2">
                                        <form action="#" method="POST">
                                            <div className="">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="">
                                                        <div className="flex ">
                                                            <label htmlFor="client-name" className="block text-sm font-medium mr-5 py-4 text-gray-700">
                                                                Client
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="client"
                                                                id="client"
                                                                placeholder="Client Name"
                                                                className="flex justify-betwen my-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full "
                                                            />
                                                        </div>
                                                        <div className="flex ">
                                                            <label htmlFor="no-contract" className="block text-sm font-medium  py-4 mr-3 text-gray-700">
                                                                Contract
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="client"
                                                                id="client"
                                                                placeholder="No Contract"
                                                                className="flex justify-betwen my-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                                            />
                                                        </div>
                                                        <div className="flex">
                                                            <div className="flex justify-betwen">
                                                                <label htmlFor="periode" className="mr-4 py-4 block text-sm font-medium text-gray-700">
                                                                    Periode
                                                                </label>
                                                                <div className='flex items-center'>
                                                                    <DatePicker
                                                                        name="batch_start_date"
                                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"

                                                                    />
                                                                    <CalendarIcon
                                                                        htmlFor="batch_start_date"
                                                                        className="mx-1 w-8 h-8 text-gray-600"
                                                                    />
                                                                </div>
                                                                <div className='flex items-center'>
                                                                    <DatePicker
                                                                        name="batch_start_date"
                                                                        className="mt-1  focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"

                                                                    />
                                                                    <CalendarIcon
                                                                        htmlFor="batch_start_date"
                                                                        className="ml- w-8 h-8 text-gray-600"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <label htmlFor="status" className="py-4 mr-6 flex justify-betwen block text-sm font-medium text-gray-700">
                                                                Status
                                                            </label>
                                                            <select
                                                                id="status"
                                                                name="status"
                                                                autoComplete="status-name"
                                                                placeholder="Status"
                                                                className="mt-3 block w-32 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            >
                                                                <option>Status</option>
                                                                {
                                                                    (talent_status || []).map((value, index) => (
                                                                        <option className="capitalize" value={value} key={index}>{value}</option>
                                                                    ))
                                                                }

                                                            </select>
                                                        </div>
                                                        <div className="flex">
                                                            <label htmlFor="notes" className="flex py-4 mr-6 justify-betwen block text-sm font-medium text-gray-700">
                                                                Notes
                                                            </label>
                                                            <textarea
                                                                id="Notes"
                                                                name="Notes"
                                                                rows={2}
                                                                className="shadow-sm mt-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                                placeholder="Notes"
                                                                defaultValue={''}
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="px-4  text-right sm:px-6">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-2 px-4 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                    >
                                                        Create
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" onClick={props.closeModal}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </Transition.Child>
                        </div>
                    </Dialog>

                </Transition>

            )}
        </div>

    )
}
