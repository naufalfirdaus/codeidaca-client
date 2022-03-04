import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { doGetTalentDetailRequest } from '../../../redux-saga/actions/TalentDetail';
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"
import { toast } from "react-toastify";
import { doSwitchIdleRequest } from '../../../redux-saga/actions/Placement';


export default function SwitchIdle(props) {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { details } = useSelector((state) => state.talentDetailState)


    useEffect(() => {
        dispatch(doGetTalentDetailRequest(id))
    }, [])

    const formik = useFormik({
        initialValues: {
            tati_date: '',
            tati_timeline_name: '',
            tati_tale_id: id
        },
        onSubmit: values => {
            const payload = {
                tati_date: values.tati_date || '',
                tati_timeline_name: values.tati_timeline_name || '',
                tati_tale_id: id
            }
            dispatch(doSwitchIdleRequest(payload))

            props.closeModal()


        },
    });


    return (
        <div>
            {(details || []).map((detail) =>
                <Transition appear show={props.isSwitch} as={Fragment}>
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
                                    <Dialog.Title as="h3" className="my-1 text-lg font-medium leading-6 text-gray-900">
                                        Talent Placement For {detail.talent.tale_fullname}
                                    </Dialog.Title>
                                    <div className="">
                                        <form action="#" method="POST">

                                            <div className="px-4 py-2 bg-white sm:p-6">

                                                <div className="flex">
                                                    <div className="flex justify-betwen">
                                                        <label htmlFor="tati_date" className="mr-8 py-4 block text-sm font-medium text-gray-700">
                                                            Start
                                                        </label>
                                                        <div className='flex items-center'>
                                                            <input type="date" id="tati_date"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.tati_date} className="shadow-sm mt-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <label htmlFor="tati_timeline_name" name='tati_timeline_name' className="flex py-4 mr-6 justify-betwen block text-sm font-medium text-gray-700">
                                                        Notes
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="tati_timeline_name"
                                                        name="tati_timeline_name"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.tati_timeline_name}
                                                        autoComplete="tati_timeline_name"
                                                        className="shadow-sm mt-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    />

                                                </div>


                                            </div>
                                            <div className="px-4  text-right sm:px-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center py-2 px-4 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                    onClick={formik.handleSubmit}

                                                >
                                                    Set To Idle
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" onClick={props.closeModal}
                                                >
                                                    Cancel
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            )}
        </div >
    )
}
