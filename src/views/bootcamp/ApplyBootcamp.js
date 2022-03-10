import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import apiApply from '../../api/apiApply'
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { isInteger, useFormik } from 'formik';
import { eventChannel } from 'redux-saga';

export default function Apply() {
    let navigate = useNavigate()
    const [selectedDate, setselectedDate] = useState(null)

    const { userProfile } = useSelector((state) => state.userState);
    console.log(userProfile)
    
      const validationSchema = Yup.object().shape({
        tale_fullname:Yup.string("Enter Fullname")
        .required("Fulname is required")
      })
    
    
    const formik = useFormik({
      initialValues : {
          tale_fullname:"",
          tale_birthdate: '',
          tale_education: '',
          tale_school_name: '',
          tale_major: '',
          tale_handphone: '',
          tale_bootcamp: '',
          tale_motivation: '',
          tale_resume:'',
          tale_photo:''
      },
      validationSchema :validationSchema,
      onSubmit : async(values)=>{
        // alert(values),
        
        values.tale_birthdate = selectedDate
        let payload = new FormData();
        payload.append('tale_fullname',values.tale_fullname)
        payload.append('tale_birthdate',values.tale_birthdate)
        payload.append('tale_education',values.tale_education)
        payload.append('tale_tale_school_name',values.tale_school_name)
        payload.append('tale_major',values.tale_major)
        payload.append('tale_handphone',values.tale_handphone)
        payload.append('tale_bootcamp',values.tale_bootcamp)
        payload.append('tale_motivation',values.tale_motivation)
        payload.append('tale_user_id',parseInt(userProfile.userId))
        payload.append('tale_email',userProfile.email)
        payload.append('tale_resume',values.tale_resume)
        payload.append('tale_photo',values.tale_photo)
        apiApply.createApply(payload).then((response)=>{
          toast.success(response.message);
        })

        navigate('/')
      }
      
    })
    const uploadOnChange = name => event =>{
      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend=()=>{
        formik.setFieldValue('tale_resume',file)
      }
      reader.readAsDataURL(file);
    }

    const uploadImage = name => event =>{
      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend=()=>{
        formik.setFieldValue('tale_photo',file)
      }
      reader.readAsDataURL(file);
    }

  //   const [values, setValues] = useState({
  //     tale_id: undefined,
  //     tale_fullname: '',
  //     // tale_birthdate: '',
  //     // tale_education: '',
  //     // tale_school_name: '',
  //     // tale_major: '',
  //     // tale_handphone: '',
  //     // tale_bootcamp: '',
  //     // tale_motivation: '',
  //     // tale_resume: '',
  //     // tale_photo: '',
  //     // tale_role: '',
  //     // tale_status: '',
  //     // tale_status_date: Date,
  //     // tale_status_timeline: '',
  //     // tale_timeline_date: Date

  // });
  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // }
  // const onSubmit= async()=>{
  //   const payload = {
  //     tale_fullname : (values.tale_fullname),
  //     // tale_birthdate : (values.tale_birthdate),
  //     // tale_education: (values.tale_education),
  //     // tale_school_name: (values.tale_school_name),
  //     // tale_major: (values.tale_major),
  //     // tale_handphone: (values.tale_handphone),
  //     // tale_bootcamp: (values.tale_bootcamp),
  //     // tale_motivation: (values.tale_motivation),
  //     // tale_resume: (values.tale_resume),
  //     // tale_photo: (values.tale_photo),
  //     // tale_role: "candidate",
  //     // tale_status: "Candidate",
  //     // tale_status_date: Date.now(),
  //     // tale_status_timeline: "Apply",
  //     // tale_timeline_date: Date.now()
  //     // tale_user_id: userProfile.userId.parseInt()
  //   }

  //     await apiApply.createApply(payload)
  //     .then(result =>{
  //     console.log(result);
  //     toast.success("Data successfully inserted")
  //     })
  //     .catch(error => console.log(error))
  //   }
    return (
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className='flex items-center justify-center text-2xl md: col-start-2 col-span-1 relative'>Application Process</div>
          {/* <div className='flex justify-center text-base md: col-start-1 col-span-1 relative '>
          <button className='flex items-center justify-center border w-2/6 h-32 rounded-full border-gray-500'>Upload Photo</button>
          </div> */}
            <div className="md: col-start-2 col-span-1 relative">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">                        
                    <div className="col-span-6 sm:col-span-3">
                        <input
                          type="text"
                          name="tale_fullname"
                          id="tale_fullname"
                          value={formik.values.tale_fullname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder='Fullname'
                        />
                        {formik.touched.tale_fullname && formik.errors.tale_fullname ? (
                          <span className='mt-2 text-sm text-red-600'>{formik.errors.tale_fullname}</span>
                        ):null}
                      </div>
                      <div className="flex">
                            <div className="flex justify-betwen">
                                <div className='flex items-center'>
                                    <DatePicker
                                        name="tale_birthdate"
                                        id='tale_birthdate'  
                                        onBlur={formik.handleBlur}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholderText='Birthdate'
                                        selected={selectedDate} onChange ={date => setselectedDate(date)}
                                        />
                                        <CalendarIcon
                                            htmlFor="batch_start_date"
                                            className="mx-1 w-8 h-8 text-gray-600"
                                        />
                                        <input type="text"
                                        name="tale_fullname"
                                        id="tale_fullname" className="mt-1 focus:ring-indigo-200 focus:border-indigo-200 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                                </div>
                            </div>
                         </div>
                    <div className="col-span-6 sm:col-span-3">
                        <select
                          id="tale_education"
                          name="tale_education"
                          value={formik.values.tale_education}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="tale_education"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Pendidikan</option>
                          <option>SMA</option>
                          <option>D3</option>
                          <option>S1</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <input
                          type="text"
                          name="tale_school_name"
                          id="tale_school_name"
                          value={formik.values.tale_school_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder='Sekolah'
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <input
                          type="text"
                          name="tale_major"
                          id="tale_major"
                          value={formik.values.tale_major}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder='Jurusan'
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <input
                          type="text"
                          name="tale_handphone"
                          id="tale_handphone"
                          value={formik.values.tale_handphone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder='No Hp'
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <select
                          id="tale_bootcamp"
                          name="tale_bootcamp"
                          value={formik.values.tale_bootcamp}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="bootcamp"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>NodeJS</option>
                          <option>Golang</option>
                        </select>
                    </div>

                    <div className="mt-1">
                      <textarea
                        id="tale_motivation"
                        name="tale_motivation"
                        rows={3}
                        value={formik.values.tale_motivation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Motivasi join bootcamp"
                        defaultValue={''}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                    <span>Resume</span>
                    <input type="file" accept='pdf/*' class="" onChange={uploadOnChange('file')}/>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                    <input type="file" accept='images/*' class="" onChange={uploadImage('file')}/>
                    </div>

                    {/* <div>
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
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
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div> */}


                    <div className="pt-4 flex items-center space-x-4">
                        <button
                        type="button"
                        className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-red-500"
                        onClick={()=>{navigate("/")}}
                        >Cancel</button>
                        <button
                        type='button'
                        className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                        onClick={formik.handleSubmit}
                        >Create</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          <div className='text-2xl md: col-start-3 col-span-1'>
          <div className='flex items-center justify-center text-xl md: col-start-2 col-span-1 relative'>Step to Join Bootcamp</div>
          <div className="flex items-center justify-center text-xl md: col-start-2 col-span-1 relative">
                <div className="lg:py-6 lg:pr-16">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div>
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full">
                        </div>
                      </div>
                      <div className="w-px h-full border-2 border-gray-400" />
                    </div>
                    <div className="pt-1 pb-8">
                      <p className="mb-2 text-lg ">Apply Application</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div>
                        <div className="flex items-center justify-center w-8 h-8 border-4 rounded-full border-gray-500">
                        </div>
                      </div>
                      <div className="w-px h-full border-2 border-gray-400" />
                    </div>
                    <div className="pt-1 pb-8">
                      <p className="mb-2 text-lg">Filtering Test</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div>
                        <div className="flex items-center justify-center w-8 h-8 border-4 rounded-full border-gray-500">
                        </div>
                      </div>
                      <div className="w-px h-full border-2 border-gray-400" />
                    </div>
                    <div className="pt-1 pb-8">
                      <p className="mb-2 text-lg">Contract</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div>
                      <div className="flex items-center justify-center w-8 h-8 border-4 rounded-full border-gray-500">
                      </div>
                      </div>
                      <div className="w-px h-full border-2 border-gray-400" />
                    </div>
                    <div className="pt-1 pb-8">
                      <p className="text-lg mb-2">Briefing Bootcamp</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="flex items-center justify-center w-8 h-8 border-4 rounded-full border-gray-500">
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="mb-2 text-lg">Join Bootcamp</p>
                      <p className="text-gray-700" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
          </div>
        </div>
    )
  }