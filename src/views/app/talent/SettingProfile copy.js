import DatePicker from "react-datepicker";
import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import { useNavigate, NavLink, Link } from 'react-router-dom';

export default function SettingProfile(){
    const [startDate, setStartDate] = useState(new Date());
    const [previewImg, setPreviewImg] = useState();
    const [uploaded, setUploaded] = useState(false);

    const onClearImage = event =>{
        event.preventDefault();
        setUploaded(false);
        setPreviewImg(null)
    }

    const formik = useFormik({
       
        
    });

    const uploadOnChange = name => event => {
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            formik.setFieldValue('prod_images', file);
            setPreviewImg(reader.result)
        }

        reader.readAsDataURL(file);
        setUploaded(true);

    }

    return(
        <div>
<div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0">
                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Setting Profile</h1>
            </div>
            <div className="mt-4 flex sm:mt-0 sm:ml-4">
                <button
                    
                    type="button"
                    className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                >
                    Back
                </button>
            </div>
        </div>
        {/* contain page */}
        {/* <div className="px-4 mt-6 sm:px-6 lg:px-8">
            <div className="hidden mt-8 sm:block">
                <div className="align-middle inline-block min-w-full border-b border-gray-200">
                    
                </div>
            </div>
        </div> */}
        <div className='mt-5 md:mt-0 md:col-span-2'>
                <form action="#" method="POST">
                    <div className='shadow overflow-hidden sm:rounded-md'>
                        <div className="px-10 py-5 bg-white sm:p-6">
                            <div className='sm:flex-1 lg:grid grid-cols-6 gap-6'>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="tale_fullname" className="block text-sm font-medium text-gray-700">
                                        Fullname
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_fullname"
                                        id="tale_fullname"
                                        // value={formik.values.prod_name}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        autoComplete="tale_fullname"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                                </div>
                                <div className="col-span-6 row-start-2 sm:col-span-3">
                                    <label htmlFor="tale_email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_email"
                                        id="tale_email"
                                        // value={formik.values.prod_name}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        autoComplete="tale_email"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                                </div>

                                <div className="col-span-6 row-start-3 sm:col-span-3">
                                    <label htmlFor="tale_education" className="block text-sm font-medium text-gray-700">
                                        Pendidikan
                                    </label>
                                    <select
                                        name="tale_education"
                                        id="tale_education"
                                        // value={formik.values.prod_condition}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        autoComplete="tale_education"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    >
                                        {/* {
                                            listCondition.map((value, index) => (
                                                <option value={value} key={index}>{value}</option>
                                            ))
                                        } */}
                                    </select>
                                </div>

                                <div className="col-span-6 row-start-4 sm:col-span-3">
                                    <label htmlFor="tale_major" className="block text-sm font-medium text-gray-700">
                                        Jurusan
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_major"
                                        id="tale_major"
                                        // value={formik.values.prod_name}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        autoComplete="tale_major"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                                </div>


                                <div className="col-span-6 row-start-5 sm:col-span-3">
                                    <label htmlFor="tale_city" className="block text-sm font-medium text-gray-700">
                                        Kota
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_city"
                                        id="tale_city"
                                        // value={formik.values.prod_name}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        autoComplete="tale_city"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                                </div>


                                
                                <div className="col-span-6 row-start-3 sm:col-span-1">
                                    <label htmlFor="prod_price" className="block text-sm font-medium text-gray-700">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        name="prod_price"
                                        id="prod_price"
                                        // value={formik.values.prod_price}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        autoComplete="prod_price"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {/* {formik.touched.prod_price && formik.errors.prod_price ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_price}</span>
                                    ) : null} */}
                                </div>
                                <div className="col-span-6 row-start-3 sm:col-span-1">
                                    <label htmlFor="prod_stock" className="block text-sm font-medium text-gray-700">
                                        Stock
                                    </label>
                                    <input
                                        type="text"
                                        name="prod_stock"
                                        id="prod_stock"
                                        // value={formik.values.prod_stock}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        autoComplete="prod_stock"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {/* {formik.touched.prod_stock && formik.errors.prod_stock ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_stock}</span>
                                    ) : null} */}
                                </div>
                                <div className="col-span-6 sm:row-start-3 sm:col-span-4 row-start-4 lg:col-span-1">
                                    <label htmlFor="prod_condition" className="block text-sm font-medium text-gray-700">
                                        Condition
                                    </label>
                                    <select
                                        name="prod_condition"
                                        id="prod_condition"
                                        // value={formik.values.prod_condition}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        autoComplete="prod_condition"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    >
                                        {/* {
                                            listCondition.map((value, index) => (
                                                <option value={value} key={index}>{value}</option>
                                            ))
                                        } */}
                                    </select>
                                </div>
                                <div className="col-span-6 sm:row-start-4 sm:col-span-4 row-start-4 lg:col-span-1">
                                    <label htmlFor="prod_cate_id" className="block text-sm font-medium text-gray-700">
                                        Category
                                    </label>
                                    <select
                                        name="prod_cate_id"
                                        id="prod_cate_id"
                                        // value={formik.values.prod_cate_id}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        autoComplete="prod_cate_id"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    >
                                        {/* {
                                            (categories || []).map((value, index) => (
                                                <option value={value.cate_id} key={index}>{value.cate_name}</option>
                                            ))
                                        } */}
                                    </select>
                                </div>

                               

                               

                                <div className="col-span-6 col-start-4 row-span-2 sm:col-span-1 lg:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Cover brand</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            {
                                                uploaded === false ?
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg> :
                                                    <>
                                                        <img src={previewImg} alt='image' className='mx-auto h-48 w-48' />
                                                        <div className="flex text-sm text-gray-600">
                                                            <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                <span className='ml-4' onClick={onClearImage}>Remove</span>
                                                            </label>
                                                        </div>
                                                    </>


                                            }



                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="prod_url_image"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        type="file"
                                                        id="prod_url_image"
                                                        accept='image/*'
                                                        onChange={uploadOnChange('file')}
                                                        className='sr-only'
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>

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
                        </div>
                    </div>
                </form>
            </div>




        </div>
    )
}