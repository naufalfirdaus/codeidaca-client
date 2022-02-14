import React, { Fragment, useState, useEffect } from 'react'
import Page from '../../../component/commons/Page';
import { useNavigate, NavLink, Link, useLocation } from 'react-router-dom';

// import config from '../../config/config';

import { useDispatch, useSelector } from 'react-redux';
import { doEditCandidatStatusRequest, doGetCandidatRequest } from '../../../redux-saga/actions/AppCandidat';

import { Menu, Transition } from '@headlessui/react'
//theming toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    DotsVerticalIcon,
    DuplicateIcon,
    PhotographIcon,
    PencilAltIcon,
    TrashIcon,
    UserAddIcon,
    LockClosedIcon,
    RefreshIcon
} from '@heroicons/react/solid'

const listOfMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function listOfYear (start,end){
    const arr = []
    for (let i = start; i < end+1; i++) {
        arr.push(i)
    }
    return arr
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


export default function Candidat() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [listCandidates, setListCandidates] = useState([])
    const [filter, setFilter] = useState({
        timeline_status:'',
        month : 'Filter by Month',
        year :  'Year'
    })
    const [tab, setTab] = useState(
        [
            { name: 'Applied', current: true },
            { name: 'Confirm Test', current: false },
            { name: 'Filtering Test', current: false },
            { name: 'Contract', current: false },
            { name: 'Disqualified', current: false }
        ]
    )

    //1.create state candidates

    const {candidates} = useSelector((state) => state.candidatState)

    //2.declare useEffect, non dependency
    useEffect(() => {
        dispatch(doGetCandidatRequest())
        setListCandidates(candidates)
    }, []);

    useEffect(() => {
        setListCandidates(candidates)
    }, [candidates]);

    useEffect(() => {
        setListCandidates(
            Array.isArray(candidates) && candidates.filter(data=>(
                (data.tale_status_timeline.toLowerCase() === filter.timeline_status.toLowerCase() || filter.timeline_status === '') 
                &&
                (data.talent_timelines[0].date_applied.slice(0,4) === filter.year || filter.year === 'Year')
                &&
                (parseInt(data.talent_timelines[0].date_applied.slice(5,7))-1 === listOfMonth.indexOf(filter.month) || filter.month === 'Filter By Month')
            )))
        console.log(filter);
    }, [filter]);

    const handleOnChangeStatus = (name) => {
        setFilter({...filter, timeline_status: name });
        setTab(
            [...tab].map(el => (
                el.name === (name || "Applied") ? 
                { name: el.name, current: true } :
                { name: el.name, current: false }
                ))
        )
    };
    
    const handleOnChange = (name) => (event) => {
        setFilter({ ...filter, [name]: event.target.value });
    };

    const onEditTimelineStatus = async (id, status) => {
        const payload = {
            tale_id: id,
            timeline_status: status
        }
        dispatch(doEditCandidatStatusRequest(payload))
    }

    return (
        <>
        <Page title='Candidate' titleButton='Create' onClick={() => navigate('/app/candidat')}>
            
            <div className="border-b border-gray-400 flex justify-between items-center">
                <ul className="inline-flex flex-wrap -mb-px">
                    {tab.map(tab=>(
                        <li className="mr-2">
                            <button 
                                onClick={() => handleOnChangeStatus(tab.name === "Applied" ? "" : tab.name)}
                                className={classNames(
                                    tab.current
                                        ? "inline-flex py-4 px-4 text-sm font-medium text-center text-orange-600 border-orange-300 group rounded-t-lg border-b-2 border-transparent"
                                        : "inline-flex py-4 px-4 text-sm font-medium text-center text-black rounded-t-lg border-b-2 border-transparent hover:text-orange-600 hover:border-orange-300 group"
                                )}>
                                {tab.name}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mr-6 flex items-center">
                    <select 
                        name="batch_status"
                        id="batch_status"
                        onChange={handleOnChange('month')}
                        className="capitalize form-select form-select-sm appearance-none mx-1 px-2 py-0.5 w-[7.5rem] text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500" aria-label=".form-select-sm example"
                    >
                        <option>Filter By Month</option>
                        {
                            (listOfMonth || []).map((value, index) => (
                                <option className="capitalize" value={value} key={index}>{value}</option>
                            ))
                        }
                    </select>
                    <select
                        name="batch_status"
                        id="batch_status"
                        onChange={handleOnChange('year')}
                        className="capitalize form-select form-select-sm appearance-none mx-1 px-2 py-0.5 w-20 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500"
                    >
                        <option>Year</option>
                        {
                            (listOfYear(2017, new Date().getFullYear()) || []).map((value, index) => (
                                <option value={value} key={index}>{value}</option>
                            ))
                        }
                    </select>
                </div>
            </div>


            <div className="sm:block">
                <div className="align-middle inline-block min-w-full border-b border-gray-200 ">
                        <table className="min-w-full">
                            <tbody className="bg-white divide-y divide-gray-100">
                                { Array.isArray(listCandidates) && listCandidates.map((data) => (
                                        <tr key={data.tale_id}>
                                            <td className="px-6 py-6 text-center whitespace-nowrap text-sm text-gray-900">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                                    </div>
                                                    <div className="ml-4 text-left">
                                                        <div className="text-sm font-medium text-gray-900">{data.tale_fullname}</div>
                                                        <div className="text-sm text-gray-500">{data.tale_email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6 text-center whitespace-nowrap text-sm text-gray-900">
                                                <div className="text-left">
                                                    <div className="text-sm font-medium text-gray-900">{data.tale_school_name}</div>
                                                    <div className="text-sm text-gray-500">{data.tale_major}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6 text-center whitespace-nowrap text-sm font-medium text-gray-900">Lulus {data.tale_graduate}</td>
                                            <td className="px-6 py-6 text-center whitespace-nowrap text-sm font-medium text-gray-900">HP: {data.tale_handphone}</td>
                                            <td className="px-6 py-6 text-center whitespace-nowrap text-sm font-medium text-gray-900">{data.tale_bootcamp}</td>
                                            <td className="px-6 py-6 whitespace-nowrap text-xs text-gray-900 text-left">
                                                <div className="my-1">Applied on {data.talent_timelines[0].date_applied}</div>
                                                <div className="font-medium italic my-1">{data.tale_status_timeline}</div>
                                            </td>
                                            <td className="pr-6">
                                                <Menu as="div" className="relative flex justify-end items-center">
                                                    {({ open }) => (
                                                        <>
                                                            <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-600 rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ">
                                                                <span className="sr-only">Open options</span>
                                                                <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                                                            </Menu.Button>
                                                            <Transition
                                                                show={open}
                                                                as={Fragment}
                                                                enter="transition ease-out duration-100"
                                                                enterFrom="transform opacity-0 scale-95"
                                                                enterTo="transform opacity-100 scale-100"
                                                                leave="transition ease-in duration-75"
                                                                leaveFrom="transform opacity-100 scale-100"
                                                                leaveTo="transform opacity-0 scale-95"
                                                            >
                                                                <Menu.Items
                                                                    static
                                                                    className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-gray-100 ring-1 ring-gray-900 ring-opacity-5 divide-y divide-gray-300 focus:outline-none"
                                                                >
                                                                    <div className="py-1">
                                                                        <Menu.Item>
                                                                            {({ active }) => (
        
                                                                                <Link to='#'
                                                                                onClick={() => {
                                                                                        if (window.confirm("Are you sure want to Close this Batch?"))
                                                                                            onEditTimelineStatus(data.tale_id,"Confirm Test")
                                                                                    }}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                                    'group flex items-center px-4 py-2 text-sm'
                                                                                )}>
        
                                                                                    
                                                                                    Confirm Test
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>
                                                                    </div>
                                                                    <div className="py-1">
                                                                        <Menu.Item>
                                                                            {({ active }) => (
        
                                                                                <Link to='#'
                                                                                onClick={() => {
                                                                                        if (window.confirm("Are you sure want to Close this Batch?"))
                                                                                            onEditTimelineStatus(data.tale_id,"Filtering Test")
                                                                                    }}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                                    'group flex items-center px-4 py-2 text-sm'
                                                                                )}>
        
                                                                                    
                                                                                    Filtering Test
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>
                                                                    </div>
                                                                    <div className="py-1">
                                                                        <Menu.Item>
                                                                            {({ active }) => (
        
                                                                                <Link to='#'
                                                                                onClick={() => {
                                                                                        if (window.confirm("Are you sure want to Close this Batch?"))
                                                                                            onEditTimelineStatus(data.tale_id,"Contract")
                                                                                    }}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                                    'group flex items-center px-4 py-2 text-sm'
                                                                                )}>
        
                                                                                    
                                                                                    Contract
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>
                                                                    </div>
                                                                    <div className="py-1">
                                                                        <Menu.Item>
                                                                            {({ active }) => (
        
                                                                                <Link to='#'
                                                                                onClick={() => {
                                                                                        if (window.confirm("Are you sure want to Close this Batch?"))
                                                                                            onEditTimelineStatus(data.tale_id,"Disqualified")
                                                                                    }}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                                    'group flex items-center px-4 py-2 text-sm'
                                                                                )}>
        
                                                                                    
                                                                                   Disqualified
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>
                                                                    </div>
                                                                </Menu.Items>
                                                            </Transition>
                                                        </>
                                                    )}
                                                </Menu>
                                            </td>
        
                                        </tr>
                                ))}
                            </tbody>
                        </table>
                        {listCandidates.length == 0 && 
                        <div className='px-6 py-3 text-center whitespace-nowrap text-sm font-medium text-gray-900'> Data Not Found...</div>}
                </div>
            </div>
        </Page>
        <div className='z-30' >
            <ToastContainer autoClose={2000}/>
        </div>
        </>
    )
}



