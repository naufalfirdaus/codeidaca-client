import React, { Fragment, useState, useEffect } from 'react'
import Page from '../../../component/commons/Page';
import { useNavigate, NavLink, Link, useLocation } from 'react-router-dom';

// import config from '../../config/config';

import { useDispatch, useSelector } from 'react-redux';
import { doDeleteBatchRequest, doEditBatchRequest, doGetBatchRequest } from '../../../redux-saga/actions/AppBatch';

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

const columns = [
  { name: 'BATCH' },
  { name: 'TECHNOLOGY' },
  { name: 'MEMBERS' },
  { name: 'PERIOD' },
  { name: 'TRAINER' },
  { name: 'STATUS' }
]

const batch_status =['new','running', 'closed']


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Batch() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [listBatch, setListBatch] = useState([])
    const [filter, setFilter] = useState({
        input:'',
        select:''
    })

    //1.create state batchs

    const {batchs} = useSelector((state) => state.batchState)

    //2.declare useEffect, non dependency
    useEffect(() => {
        dispatch(doGetBatchRequest())
        setListBatch(batchs)
    }, []);

    useEffect(() => {
        setListBatch(batchs)
    }, [batchs]);

    const handleOnChange = (name) => (event) => {
        setFilter({ ...filter, [name]: event.target.value });
      };

    const onSearch = event =>{
        event.preventDefault();
        if (filter.input || (filter.select)) {
            setListBatch(
                Array.isArray(batchs) && batchs.filter(data=>(
                    (data.batch_name.toLowerCase().includes(filter.input.toLowerCase()) || 
                    data.batch_technology.toLowerCase().includes(filter.input.toLowerCase()) ||
                    data.batch_inst.inst_name.toLowerCase().includes(filter.input.toLowerCase())) &&
                    (filter.select === 'Status' || data.batch_status.includes(filter.select))))
                )
        }else{
            setListBatch(batchs)
        }
    }

    const onCloseBatch = async (id) => {
        console.log(id);
        const payload = {
            batch_id: id,
            batch_status: "closed"
        }
        dispatch(doEditBatchRequest(payload))
    }

    const onRunningeBatch = async (id) => {
        console.log(id);
        const payload = {
            batch_id: id,
            batch_status: "running"
        }
        dispatch(doEditBatchRequest(payload))
    }

    const onDelete = async(id)=>{
        dispatch(doDeleteBatchRequest(id));
        toast.success('Data has been deleted.')
    }

    return (
        <>
        <Page title='Batch' titleButton='Create' onClick={() => navigate('/app/batch/new')}>
            <div className="mt-6 mx-24 flex justify-center">
                <div className="w-full">
                    <div className="input-group relative flex justify-center items-stretch w-full mb-2">
                        <p className="text-xs mx-2 py-1">Search by Category</p>
                        <input 
                            type="search" 
                            onChange={handleOnChange('input')}
                            className="form-control relative w-48 block px-2 py-0.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none" placeholder="batch, technology, trainer" aria-label="Search" aria-describedby="button-addon2"/>
                        <select 
                            name="batch_status"
                            id="batch_status"
                            onChange={handleOnChange('select')}
                            className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-0.5 w-24 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500" aria-label=".form-select-sm example"
                        >
                            <option>Status</option>
                            {
                                (batch_status || []).map((value, index) => (
                                    <option className="capitalize" value={value} key={index}>{value}</option>
                                ))
                            }
                        </select>
                        <button 
                            type="submit"
                            onClick={onSearch}
                            className="btn px-3 py-1 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 transition duration-150 ease-in-out flex items-center" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="sm:block">
                <div className="align-middle inline-block min-w-full border-b border-gray-200 ">
                        <table className="min-w-full">
                            <thead className="border-y border-gray-200">
                                <tr>
                                    {(columns || []).map(column => (
                                        <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-900 uppercase">
                                            <span className="">{column.name}</span>
                                        </th>
                                    ))}

                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-900 uppercase tracking-wider" />
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                { Array.isArray(listBatch) && listBatch.map((data) => (
                                        <tr key={data.batch_id}>
                                            <td className="px-6 py-2 text-center whitespace-nowrap text-sm text-gray-900">{data.batch_name}</td>
                                            <td className="px-6 py-2 text-center whitespace-nowrap text-sm text-gray-900">{data.batch_technology}</td>
                                            <td className="px-6 py-2 text-center whitespace-nowrap text-sm text-gray-900">
                                                <div>
                                                    <div class="inline-flex justify-left -space-x-1 overflow-hidden w-[6.5rem]">
                                                        {data.talent_batches.slice(0,4).map(taba=>(
                                                        <span>
                                                            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                                            {/* {taba.taba_tale.tale_photo} */}
                                                            
                                                        </span>
                                                        ))}
                                                        {data.talent_batches.length > 4 && <span className='pl-2'>{"+" + (data.talent_batches.length-4)}</span>}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-2 text-center whitespace-nowrap text-xs text-gray-900">
                                            <div>{data.batch_start_date}</div>
                                            <div>{data.batch_end_date}</div>
                                            </td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-center">{data.batch_inst.inst_name}</td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-center capitalize">{data.batch_status}</td>
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
        
                                                                                <Link to='/app/batch/edit'
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                                    'group flex items-center px-4 py-2 text-sm'
                                                                                )}>
        
                                                                                    <PencilAltIcon
                                                                                        className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                    Edit
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
                                                                                            onCloseBatch(data.batch_id)
                                                                                    }}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                                    'group flex items-center px-4 py-2 text-sm'
                                                                                )}>
        
                                                                                    <LockClosedIcon
                                                                                        className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                    Close Batch
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>
                                                                    </div>
                                                                    <div className="py-1">
                                                                        <Menu.Item>
                                                                            {({ active }) => (
                                                                                <Link
                                                                                    to="#"
                                                                                    onClick={() => {
                                                                                        if (window.confirm("Delete this Batch ?"))
                                                                                            onDelete(data.batch_id)
                                                                                    }}
                                                                                    className={classNames(
                                                                                    active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                                    'group flex items-center px-4 py-2 text-sm'
                                                                                    )}
                                                                                >
                                                                                    <TrashIcon
                                                                                        className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                    Delete
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>
                                                                    </div>
                                                                    <div className="py-1">
                                                                        <Menu.Item>
                                                                            {({ active }) => (
        
                                                                                <Link to='#'
                                                                                onClick={() => {
                                                                                    if (window.confirm("Are you sure want to set to Running this Batch?"))
                                                                                        onRunningeBatch(data.batch_id)
                                                                                }}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                                    'group flex items-center px-4 py-2 text-sm'
                                                                                )}>
        
                                                                                    <RefreshIcon
                                                                                        className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                    Set to Running
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
                </div>
            </div>
        </Page>
        <div className='z-30' >
            <ToastContainer autoClose={2000}/>
        </div>
        </>
    )
}



