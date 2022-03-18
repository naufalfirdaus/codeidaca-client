import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from 'react-redux';
import { doGetTalentDetailRequest } from '../../../redux-saga/actions/TalentDetail';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { doAddPlaceRequest } from '../../../redux-saga/actions/Placement';
import {
    CalendarIcon,
} from '@heroicons/react/solid'


const talent_status = ['TRIAL', 'PLACEMENT']

export default function TalentPlacement(props) {

    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());

    const { id } = useParams()
    const dispatch = useDispatch()

    const { details } = useSelector((state) => state.talentDetailState)


    useEffect(() => {
        dispatch(doGetTalentDetailRequest(id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            tale_id: id,
            client_name: '',
            place_purchase_order: '',
            place_start_date: '',
            place_end_date: '',
            place_status: '',
            place_note: '',
        },
        onSubmit: values => {
            values.place_start_date = startDate;
            values.place_end_date = startDate1;

            const payload = {
                client_name: values.client_name || '',
                place_purchase_order: values.place_purchase_order || '',
                place_start_date: values.place_start_date,
                place_end_date: values.place_end_date,
                place_status: values.place_status || '',
                place_note: values.place_note || '',
                tale_id: id,
            }
            dispatch(doAddPlaceRequest(payload))
            props.closeModal()

        },
    });

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


                                <div className="border-4 inline-block h-full max-h-2xl w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-2xl">

                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                        Talent Placement For {detail.talent.tale_fullname}
                                    </Dialog.Title>

                                    <div className=" mb-2 py-1  ">
                                        <form action="#" method="POST">
                                            <div className="">
                                                <div className=" mb-2 px-4 py-4 bg-white sm:p-6">
                                                    <div className=" py-4 mt-1 mb-2 ">
                                                        <div className="mb-2 flex ">
                                                            <label htmlFor="client_name"
                                                                name='client_name' className="block text-sm font-medium mr-5 py-4 text-gray-700">
                                                                Client
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="client_name"
                                                                name="client_name"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.client_name}
                                                                autoComplete="client_name"
                                                                placeholder="Client Name"
                                                                className="flex justify-betwen my-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full "
                                                            />
                                                        </div>
                                                        <div className="flex ">
                                                            <label htmlFor=" place_purchase_order"
                                                                name=' place_purchase_order' className="block text-sm font-medium  py-4 mr-3 text-gray-700">
                                                                Contract
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="place_purchase_order"
                                                                name="place_purchase_order"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.place_purchase_order}
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
                                                                        selected={startDate} onChange={(date) => setStartDate(date)}

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
                                                                        selected={startDate1} onChange={(date) => setStartDate1(date)}
                                                                    />
                                                                    <CalendarIcon
                                                                        htmlFor="batch_start_date"
                                                                        className="ml- w-8 h-8 text-gray-600"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <label htmlFor=" place_status"
                                                                name=" place_status" className="py-4 mr-6 flex justify-betwen block text-sm font-medium text-gray-700">
                                                                Status
                                                            </label>
                                                            <select
                                                                id="place_status"
                                                                name="place_status"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.place_status}
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
                                                            <label htmlFor="place_note"
                                                                name="place_note"
                                                                className="flex py-4 mr-6 justify-betwen block text-sm font-medium text-gray-700">
                                                                Notes
                                                            </label>
                                                            <textarea
                                                                type="text"
                                                                id="place_note"
                                                                name="place_note"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.place_note}
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
                                                        onClick={formik.handleSubmit}
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
