import DatePicker from "react-datepicker";
import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink, Link, Navigate } from 'react-router-dom';
import { doGetTalentRequest, doUpdateTalentRequest } from "../../../redux-saga/actions/AppSettingAction";

export default function SettingProfile(){
    const [birthDate, setBirthDate] = useState(new Date());
    const [previewImg, setPreviewImg] = useState();
    const [uploaded, setUploaded] = useState(false);
    const dispatch = useDispatch();
    let navigate = useNavigate
    const {userProfile} = useSelector((state) => state.userState)
    const {talent} = useSelector((state) => state.talentState)
    const onClearImage = event =>{
        event.preventDefault();
        setUploaded(false);
        setPreviewImg(null)
    }

    // const Pendidikan = [
    //     { name: 'SMK' },
    //     { name: 'D3' },
    //     { name: 'S1' }
    // ]

    const pendidikan  = ['SMK', 'D3', 'S1']

    const bootcamp = ['NodeJS', '.Net', 'Golang']

    

    useEffect(()=>{
        //dispatch(doGetTalentRequest(2))
        dispatch(doGetTalentRequest(userProfile.userId))
    }, []); 

    const validationSchema = Yup.object().shape({
        // tale_fullname: Yup
        // .string("Enter Fullname")
        // .required('Fullname is required'),
        // tale_email: Yup
        // .string("Please enter your email")
        // .required('Email is required'),
        // tale_major: Yup
        // .string("Tolong isi data jurusan")
        // .required('Jurusan is required'),
        // tale_city: Yup
        // .string("Tolong isi data kota")
        // .required('City is required'),
        // tale_school_name: Yup
        // .string('Tolong isi data Universitas')
        // .required('University is required'),
        // tale_graduate: Yup
        // .number().min(1997).default(0),
        // tale_gpa: Yup
        // .number().min(1).default(0),
        // tale_province: Yup
        // .string('Tolong isi data Daerah')
        // .required('Province is required'),

    })



    const formik = useFormik({
       enableReinitialize:true,
        initialValues: {
        tale_fullname: talent.tale_fullname,
        tale_email: talent.tale_email,
        tale_education: talent.tale_education,
        tale_major: talent.tale_major,
        tale_city: talent.tale_city,
        tale_bootcamp: talent.tale_bootcamp,
        tale_resume: talent.tale_resume,
        tale_candidat_resume: talent.tale_candidat_resume,
        tale_birthdate: talent.tale_birthdate,
        tale_handphone: talent.tale_handphone,
        tale_school_name: talent.tale_school_name,
        tale_graduate: talent.tale_graduate,
        tale_gpa: talent.tale_gpa,
        tale_province: talent.tale_province,
        tale_tag_skill: talent.tale_tag_skill,

       },
       validationSchema: validationSchema,
       onSubmit: async(values) => {
           values.tale_birthdate = birthDate;
           let payload = new FormData();

           payload.append('tale_fullname',values.tale_fullname);  
           payload.append('tale_birthdate',values.tale_birthdate);   
           payload.append('tale_education', values.tale_education); 
           payload.append('tale_major', values.tale_major);
           payload.append('tale_school_name', values.tale_school_name);
           payload.append('tale_handphone', values.tale_handphone);
           payload.append('tale_bootcamp', values.tale_bootcamp);
           payload.append('tale_graduate', parseInt(values.tale_graduate));
           payload.append('tale_gpa', parseInt(values.tale_gpa));
           payload.append('tale_city', values.tale_city);
           payload.append('tale_province', values.tale_province);
           payload.append('tale_tag_skill', values.tale_tag_skill);
           payload.append('tale_candidat_resume', values.tale_candidat_resume);
           payload.append('tale_resume', values.tale_resume);

            //payload.append('tale_email', values.tale_email);

            
            payload.append('tale_user_id', parseInt(userProfile.userId))

            dispatch(doUpdateTalentRequest(payload))


            navigate('app/dashboard', {state: {refresh:true}})
       }
        
    });

    // useEffect(() => {
    // formik.touched.tale_fullname=talent.fullname
     
      
    // }, [talent])
    



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
                                <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="tale_fullname" className="block text-sm font-medium text-gray-700">
                                        Fullname
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_fullname"
                                        id="tale_fullname"
                                        value={formik.values.tale_fullname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_fullname"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.tale_fullname && formik.errors.tale_fullname ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_fullname}</span>
                                    ) : null}
                                </div>
                                <div className="col-span-6 row-start-2 sm:col-span-2">
                                    <label htmlFor="tale_email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_email"
                                        id="tale_email"
                                        value={formik.values.tale_email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_email"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.tale_email && formik.errors.tale_email ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_email}</span>
                                    ) : null}
                                </div>

                                <div className="col-span-6 row-start-3 sm:col-span-2">
                                    <label htmlFor="tale_education" className="block text-sm font-medium text-gray-700">
                                        Pendidikan
                                    </label>
                                    <select
                                        name="tale_education"
                                        id="tale_education"
                                        value={formik.values.tale_education}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_education"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option>Pendidikan</option>
                                        {
                                            pendidikan.map((value, index) => 
                                                <option value={value} key={index}>{value}</option>
                                            )
                                        }
                                    </select>
                                </div>

                                <div className="col-span-6 row-start-4 sm:col-span-2">
                                    <label htmlFor="tale_major" className="block text-sm font-medium text-gray-700">
                                        Jurusan
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_major"
                                        id="tale_major"
                                        value={formik.values.tale_major}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_major"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.tale_major && formik.errors.tale_major ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_major}</span>
                                    ) : null}
                                </div>


                                <div className="col-span-6 row-start-5 sm:col-span-2">
                                    <label htmlFor="tale_city" className="block text-sm font-medium text-gray-700">
                                        Kota
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_city"
                                        id="tale_city"
                                        value={formik.values.tale_city}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_city"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.tale_city && formik.errors.tale_city ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_city}</span>
                                    ) : null}
                                </div>

                                <div className="col-span-6 row-start-6 sm:col-span-2">
                                    <label htmlFor="tale_bootcamp" className="block text-sm font-medium text-gray-700">
                                        Joint Bootcamp
                                    </label>
                                    <select
                                         name="tale_bootcamp"
                                         id="tale_bootcamp"
                                         value={formik.values.tale_bootcamp}
                                         onChange={formik.handleChange}
                                         onBlur={formik.handleBlur}
                                         autoComplete="tale_bootcamp"
                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    >
                                        {
                                            bootcamp.map((value, index) => 
                                                <option value={value} key={index}>{value}</option>
                                            )
                                        }
                                    </select>
                                </div>

                                <div className="col-span-6 row-start-7 sm:col-span-2">
                                    <label htmlFor="tale_resume" className="block text-sm font-medium text-gray-700">
                                        Resume
                                    </label>
                                    <input
                                       type="file"
                                       name="tale_resume"
                                       id="tale_resume"
                                       value={formik.values.tale_resume}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       autoComplete="tale_resume"
                                       className="from-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    />
                                    {formik.touched.tale_resume && formik.errors.tale_resume ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_resume}</span>
                                    ) : null}
                                </div>

                                <div className="col-span-6 row-start-7 sm:col-span-2">
                                    <label htmlFor="tale_candidat_resume" className="block text-sm font-medium text-gray-700">
                                        Cover Letter
                                    </label>
                                    <input
                                        type="file"
                                        name="tale_candidat_resume"
                                        id="tale_candidat_resume"
                                        value={formik.values.tale_candidat_resume}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_candidat_resume"
                                        className="from-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    />
                                    {formik.touched.tale_candidat_resume && formik.errors.tale_candidat_resume ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_candidat_resume}</span>
                                    ) : null}
                                </div>

                                

                                <div className="col-span-6 sm:col-span-1 lg:col-span-2">
                                    <label htmlFor="tale_birthdate" className="block text-sm font-medium text-gray-700">
                                        Birth Date
                                    </label>
                                    <input 
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    type="date"
                                    selected={formik.values.tale_birthdate}></input>
                                    {/* <DatePicker
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        selected={birthDate}
                                        onChange={(date) => setBirthDate(date)} /> */}
                                </div>


                                <div className="col-span-6 row-start-2 sm:col-span-2">
                                    <label htmlFor="tale_handphone" className="block text-sm font-medium text-gray-700">
                                        Contact Number
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_handphone"
                                        id="tale_handphone"
                                        value={formik.values.tale_handphone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_handphone"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.tale_handphone && formik.errors.tale_handphone ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_handphone}</span>
                                    ) : null}
                                </div>


                                <div className="col-span-6 row-start-3 sm:col-span-2">
                                    <label htmlFor="tale_school_name" className="block text-sm font-medium text-gray-700">
                                        Pendidikan
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_school_name"
                                        id="tale_school_name"
                                        value={formik.values.tale_school_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_school_name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.tale_school_name && formik.errors.tale_school_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_school_name}</span>
                                    ) : null}
                                </div>


                                <div className="col-span-6 row-start-4 sm:col-span-1">
                                    <label htmlFor="tale_graduate" className="block text-sm font-medium text-gray-700">
                                        Tahun Lulus
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_graduate"
                                        id="tale_graduate"
                                        value={formik.values.tale_graduate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_graduate"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.tale_graduate && formik.errors.tale_graduate ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_graduate}</span>
                                    ) : null}
                                </div>


                                <div className="col-span-6 row-start-4 sm:col-span-1">
                                    <label htmlFor="tale_gpa" className="block text-sm font-medium text-gray-700">
                                        IPK
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_gpa"
                                        id="tale_gpa"
                                        value={formik.values.tale_gpa}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_gpa"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.tale_gpa && formik.errors.tale_gpa ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_gpa}</span>
                                    ) : null}
                                </div>


                                <div className="col-span-6 row-start-5 sm:col-span-2">
                                    <label htmlFor="tale_province" className="block text-sm font-medium text-gray-700">
                                        Provinsi
                                    </label>
                                    <input
                                        type="text"
                                        name="tale_province"
                                        id="tale_province"
                                        value={formik.values.tale_province}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="tale_province"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.tale_province && formik.errors.tale_province ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.tale_province}</span>
                                    ) : null}
                                </div>


                                <div className="col-span-6 row-start-6 sm:col-span-2">
                                    <label htmlFor="tale_tag_skill" className="block text-sm font-medium text-gray-700">
                                        Skills
                                    </label>
                                    <textarea
                                        id="tale_tag_skill"
                                        name="tale_tag_skill"
                                        value={formik.values.tale_tag_skill}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        rows={3}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="NodeJS, React, PostgreSQL"
                                        defaultValue={''}
                                    />
                                    {formik.touched.tale_tag_skill && formik.errors.tale_tag_skill ? (
                                        <span className="mt-2 text-sm text-red-600" >{formik.errors.tale_tag_skill}</span>
                                    ) : null}
                                </div>

                                <div className="col-span-6 sm:col-span-1 lg:row-start-1 row-end-4 col-start-4">
                                <div class="relative w-36 h-36">
                                    <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
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