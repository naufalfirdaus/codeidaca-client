import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink, Link, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import { useFormik, useField, useFormikContext  } from "formik";
import * as Yup from "yup";
import Page from '../../../component/commons/Page';
 
import {
    CalendarIcon,
    UserGroupIcon,
    XIcon
} from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux';
import { doEditBatchRequest, doGetBatchIdRequest } from '../../../redux-saga/actions/AppBatch';
import config from '../../../config/config';

// const technologies = ['NodeJS','Golang','.NET','Java','Python']

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function EditBatch() {
  
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const {batch, talents, trainers} = useSelector((state) => state.batchState)

    const [members, setMembers] = useState([])
    const [countMembers, setCountMembers] = useState(0)
    const [trainerNames, setTrainerNames] = useState([])

    const {id} = useParams()

    useEffect(() => {
        dispatch(doGetBatchIdRequest(id))
    }, [])


    useEffect(() => {
        setTrainerNames([...new Set(trainers.map(item => item.inst_name))])
        console.log("");
    }, [trainers])
    

    useEffect(() => {
        setMembers(
            talents && talents.map(el=>(
                {
                    tale_id: el.tale_id,
                    tale_fullname: el.tale_fullname,
                    tale_school_name: el.tale_school_name,
                    tale_photo: el.tale_photo,
                    selected: batch.talent_batches.map(el=>el.taba_tale_id).includes(el.tale_id) ? true : false
                }
            ))
        )
    }, [talents])

    useEffect(() => {
        setCountMembers(
            members.length && members.filter(el=>el.selected).length
        )
        console.log(countMembers);
    }, [members])

    const validationSchema = Yup.object().shape({
        batch_name: Yup
            .string('Enter batch name')
            .required('batch name is required')
    });

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            batch_id: batch.batch_id || 0, 
            batch_name: batch.batch_name || '', 
            batch_inst_name: batch.batch_inst === undefined ? '' : batch.batch_inst.inst_name, 
            batch_inst_id: batch.batch_inst === undefined ? '' : batch.batch_inst.inst_id, 
            batch_technology: batch.batch_technology || '',
            batch_start_date: batch.batch_start_date && new Date(batch.batch_start_date),
            batch_end_date: batch.batch_end_date && new Date(batch.batch_end_date)
        },
        // validationSchema: validationSchema,
        onSubmit: async (values) => {

            
            
            values.batch_inst_id = trainers.filter(el=>el.inst_name.toLowerCase() === values.batch_inst_name.toLowerCase() 
                                                    && el.inst_bootcamp.toLowerCase() === values.batch_technology.toLowerCase())[0].inst_id
            values.talent_batches = members.filter(el=>el.selected).map(el=>({tale_id: el.tale_id}))

            // let payload = new FormData();
            // payload.append('batch_id', values.batch_id);
            // payload.append('batch_name', values.batch_name);
            // payload.append('batch_technology', values.batch_technology);
            // payload.append('batch_start_date', values.batch_start_date);
            // payload.append('batch_end_date', values.batch_end_date);
            // payload.append('batch_inst_id', values.batch_inst_id);
            // payload.append('talent_batches', values.talent_batches);

            const payload = {
                batch_id: values.batch_id,
                batch_name: values.batch_name,
                batch_technology: values.batch_technology,
                batch_start_date: values.batch_start_date,
                batch_end_date: values.batch_end_date,
                batch_inst_id: values.batch_inst_id,
                talent_batches: values.talent_batches
            }

            console.log(payload)

            //post with redux-saga
            dispatch(doEditBatchRequest(payload))

            navigate(-1)
        }
      });


    const customHandleChange = e => {
        const { value } = e.target;

        formik.setFieldValue('batch_inst_name', value);
        formik.setFieldValue('batch_technology', trainers.filter(el=>el.inst_name === value)[0].inst_bootcamp);
    }
  
    return <>
        <Page title='Edit Batch' titleButton='Back' onClick={() => navigate(-1)} >
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST" >
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-10 py-5 bg-gray-100 sm:p-6 ">
                            <div className="sm:grid sm:grid-cols-5 gap-4">
                                <div className="col-span-5 lg:row-start-1 lg:col-span-2">
                                    <label htmlFor="batch_name" className="block text-sm font-medium text-gray-900">
                                        Batch Name
                                    </label>
                                    <input
                                        type="text"
                                        name="batch_name"
                                        id="batch_name"
                                        value={formik.values.batch_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="batch_name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.batch_name && formik.errors.batch_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.batch_name}</span>
                                    ) : null}
                                </div>
                                <div className="col-span-5 lg:row-start-1 lg:col-span-2">
                                    <label htmlFor="batch_technology" className="block text-sm font-medium text-gray-900">
                                        Technology
                                    </label>
                                    <select
                                        name="batch_technology"
                                        id="batch_technology"
                                        value={formik.values.batch_technology }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="batch_technology"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        {trainers && trainers.filter(el=>el.inst_name === formik.values.batch_inst_name).map((value, index) =>
                                            <option value={value.inst_bootcamp} key={index} >{value.inst_bootcamp}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-span-5 row-start-5 lg:row-start-1 lg:col-span-1 row-span-2 justify-self-start self-start lg:justify-self-center lg:self-center">
                                    <UserGroupIcon className="w-20 h-20 text-gray-600" aria-hidden="true" />
                                    <h1 className='font-bold text-gray-600 text-4xl text-center'>{countMembers}</h1>
                                </div>
                                <div className="col-span-5 lg:row-start-2 lg:col-span-2">
                                    <label htmlFor="batch_inst_name" className="block text-sm font-medium text-gray-900">
                                        Trainer
                                    </label>
                                    <select
                                        name="batch_inst_name"
                                        id="batch_inst_name"
                                        value={formik.values.batch_inst_name}
                                        onChange={customHandleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="batch_inst_name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        {trainerNames && trainerNames.map((value, index) =>
                                            <option value={value} key={index} >{value}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-span-2 lg:row-start-2 lg:col-span-1">
                                    <label htmlFor="batch_start_date" className="block text-sm font-medium text-gray-700">
                                        Period
                                    </label>
                                    <div className='flex items-center'>
                                        <DatePicker
                                            name="batch_start_date"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            selected={formik.values.batch_start_date}
                                            onChange={(date) => formik.setFieldValue("batch_start_date", date)}
                                            />
                                        <CalendarIcon
                                            htmlFor="batch_start_date"
                                            className="ml-1 w-8 h-8 text-gray-600"
                                            />
                                    </div>
                                </div>
                                <div className="col-span-2 lg:row-start-2 lg:col-span-1 relative">
                                    <div className='flex items-center absolute bottom-0'>
                                        <DatePicker
                                            name="batch_end_date"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            selected={formik.values.batch_end_date}
                                            onChange={(date) => formik.setFieldValue("batch_end_date", date)}
                                            />
                                        <CalendarIcon
                                            htmlFor="batch_end_date"
                                            className="ml-1 w-8 h-8 text-gray-600"
                                            />
                                    </div>
                                    {formik.touched.batch_end_date && formik.errors.batch_end_date ? (
                                        <div className="mt-2 text-sm text-red-600">{formik.errors.batch_end_date}</div>
                                    ) : null}
                                </div> 
                            </div>
                            <div className="mt-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="sm:col-span-2 lg:col-span-3">
                                    <h1 className='font-medium text-gray-400'>
                                        RECOMMENDED BOOTCAMP MEMBERS
                                    </h1>
                                </div>
                                {members && members.map((el,index)=>(
                                    <div>
                                        <input 
                                            className='hidden'
                                            type="checkbox" 
                                            id={`${index}`}
                                            checked={el.selected}
                                            onChange={()=>{
                                                setMembers(()=>{
                                                members[index].selected = !el.selected
                                                return [...members]
                                                })
                                            }}  
                                        />
                                        <label 
                                            htmlFor={`${index}`}
                                            className={classNames(
                                                el.selected ? "border-gray-400 bg-green-400" : "border-gray-400 bg-white",
                                                "cursor-pointer border border-gray-400 bg-white shadow-md rounded-lg py-2 pl-2 flex items-center justify-between"
                                            )}  
                                        >
                                            <div className="flex w-full items-center">
                                                <img className="h-10 w-10 rounded-full" src={`${config.urlImageTalent}/${el.tale_photo}`} alt={`${el.tale_id}`}/>
                                                <div className="ml-3 text-left">
                                                    <div className="text-sm font-medium text-gray-900">{el.tale_fullname}</div>
                                                    <div className="text-[10px] text-gray-500">{el.tale_school_name}</div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                className={classNames(el.selected ? "rotate-0":"rotate-[135deg]","transition ease-in-out duration-500 text-gray-600 h-7 w-7 mr-2 rotate-0" )}
                                                stroke="currentColor" viewBox="0 0 20 20" fill="currentColor">
                                                <path strokeLinecap="round"    strokeLinejoin="round" strokeWidth="1" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </label>
                                    </div>    
                                ))}
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="button"
                                onClick={formik.handleSubmit}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="inline-flex ml-3 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Page>
        <ToastContainer autoClose={2000} />
    
    </>
}
