import React, { useState, useEffect } from 'react'
import Page from '../../../component/commons/Page';
import { PaperClipIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

import { useDispatch, useSelector } from 'react-redux';
import { doGetTalentDetailRequest } from '../../../redux-saga/actions/TalentDetail';
import { doGetClientRequest } from '../../../redux-saga/actions/Client'
import TalentPlacement from './TalentPlacement';
import { useLocation, useParams } from "react-router-dom";
import SwitchIdle from './SwitchIdle';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TalentDetail() {
    let [isOpen, setIsOpen] = useState(false)
    let [isSwitch, setIsSwitch] = useState(false)

    const { id } = useParams()
    const dispatch = useDispatch()


    const { details } = useSelector((state) => state.talentDetailState)
    const { clients } = useSelector((state) => state.clientState)


    useEffect(() => {
        dispatch(doGetTalentDetailRequest(id))
    }, [])

    useEffect(() => {
        dispatch(doGetClientRequest(id))
    }, [])




    return (
        <>
            <Page title='Talent Profile' titleButton='Create/Change Placement' onClick={() => setIsOpen(true)} >
                {details&&details.map((detail) => (
                    <>
                        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                            <div className="inline-block h-24 w-24 rounded-full bg-gray-100  sm:col-span-2 lg:col-span-1">
                                {/* <img
                                    className="w-24 h-24 rounded-full"
                                    src={`/static/images/` + detail.talent.tale_photo}
                                    alt=""
                                /> */}
                                {console.log(detail)}
                            </div>
                            <div className="sm:col-span-8 lg:col-span-10">
                                <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{detail.talent.tale_fullname}</h2>
                                <div className="">
                                    <p className="text-2xl text-gray-900">{detail.batch[0].batch_technology},{detail.batch[0].batch_name}</p>
                                    <p className="text-2xl text-gray-900">{detail.batch[0].batch_start_date} until {detail.batch[0].batch_start_date}</p>
                                </div>

                            </div>
                            <div className=''>
                                <h4>Scale Skill (1.4)</h4>
                                {}
                                <div className="sm:mt-0 sm:ml-2">
                                    <h4 className="sr-only">Reviews</h4>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={classNames(
                                                        detail.talent.tale_scale_skill > rating ? 'text-gray-900' : 'text-gray-200',
                                                        'h-5 w-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">{detail.talent.tale_scale_skill} out of 5 stars</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 pt-5 pb-1 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Talent information</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Ask talent to full cv application</p>
                            </div>
                            <hr className='mx-4 shadow '></hr>
                            <div className="">
                                <dl className='px-3'>
                                    <div className='sm:grid sm:grid-cols-3'>
                                        <div className="bg-white px-4 py-4 ">
                                            <dt className="text-sm font-medium text-gray-500">Application for</dt>
                                            <dd className="mt-1 text-sm text-gray-900 ">{detail.talent.tale_position}</dd>
                                        </div>
                                        <div className=" bg-white px-4 py-4  ">
                                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                            <dd className="mt-1 text-sm text-gray-900 ">{detail.talent.tale_email}</dd>
                                        </div>
                                        <div className="bg-white px-4 py-4 ">
                                            <dt className="text-sm font-medium text-gray-500">Status</dt>
                                            <dd className="mt-1 text-sm text-gray-900 ">{detail.talent.tale_status_timeline}</dd>
                                        </div>
                                        <div className="bg-white px-4   ">
                                            <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                            <dd className="mt-1 text-sm text-gray-900 ">{detail.talent.tale_handphone}</dd>
                                        </div>
                                        <div className="bg-white px-4  ">
                                            <dt className="text-sm font-medium text-gray-500">Skill</dt>
                                            <dd className="mt-1 text-sm text-gray-900 ">{detail.talent.tale_tag_skill}</dd>
                                        </div>
                                        {(clients || []).map((client) => (
                                            <div className="bg-white px-4  ">
                                                <dt className="text-sm font-medium text-gray-500">Placement</dt>
                                                <dd className="mt-1 text-sm text-gray-900 ">{client.client[0].client_name} </dd>
                                                <dd className="mt-1 text-sm text-gray-900 ">Start: {client.place[0].place_start_date} Until {client.place[0].place_end_date}</dd>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-white px-4 py-5  " >
                                        <dt className="text-sm font-medium text-gray-500">Review Trainer</dt>
                                        <dd className="mt-1 text-sm text-gray-900 ">
                                            {detail.talentBatch[0].taba_review}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-1">
                                        <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                        <dd className="mt-1 text-sm text-gray-900 ">
                                            <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                    <div className="w-0 flex-1 flex items-center">
                                                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        <span className="ml-2 flex-1 w-0 truncate">{detail.talent.tale_resume}</span>
                                                    </div>
                                                </li>
                                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                    <div className="w-0 flex-1 flex items-center">
                                                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        <span className="ml-2 flex-1 w-0 truncate">{detail.talent.tale_cover_letter}</span>
                                                    </div>
                                                </li>
                                            </ul>

                                            <div className='flex justify-end'>
                                                <button onClick={() => setIsSwitch(true)}
                                                    type="button"
                                                    className="order-0 items-center px-4 py-2 mb-2 mt-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                                                > Switch to Idle
                                                </button>
                                                <button
                                                    type="button"
                                                    className="order-0 items-center px-4 py-2 mb-2 mt-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                                                > Return
                                                </button>
                                            </div>

                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </>
                ))}

            </Page>
            {
                isOpen ? <TalentPlacement
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                /> : null
            }
            {
                isSwitch ? <SwitchIdle
                    isSwitch={isSwitch}
                    closeModal={() => setIsSwitch(false)}
                /> : null
            }
        </>
    )
}
