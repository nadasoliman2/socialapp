import { useForm } from "react-hook-form";
import {zodResolver } from "@hookform/resolvers/zod";
import { registershema } from "../shema/register.shema";
import { Feedback } from "../Commponet/feedback";
import { NavLink } from "react-router-dom"
import { postresgister } from "../api/register.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function  Register(){
  const router = useNavigate();
  const [error,setError]= useState('');
  const [loading,setLoading]=useState(false);
       const {handleSubmit , register,formState:{errors}}= useForm({
        resolver:zodResolver(registershema),
        defaultValues:{
              name:'',
            email:'',
             password:'',
           rePassword:'',
            dateOfBirth:'',
            gender:''
        },
           mode:'onChange'
       });
    async   function submit(data){
   setLoading(true)
       
   
try{
const res = await postresgister(data)
if(res.message ==='success'){
setLoading(false)
setError('')
router('/')
}

}catch(error){
 setLoading(false);
 setError(error?.response?.data?.error)
}





       }




    return(
        <>
        {error&&<Feedback msg={error}></Feedback>}
        <form className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto p-4 my-12" onSubmit={handleSubmit(submit)}>
      <div className="relative z-0 w-full mb-5 group">
        <input  {...register('name')} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
 {errors.name && <Feedback msg = {errors.name?.message}></Feedback>}

  
  <div className="relative z-0 w-full mb-5 group">
      <input  {...register('email')}  type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
   {errors.email && <Feedback msg = {errors.email?.message}></Feedback>}

  <div className="relative z-0 w-full mb-5 group">
      <input  {...register('password')}  type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
   {errors.password && <Feedback msg = {errors.password?.message}></Feedback>}

  <div className="relative z-0 w-full mb-5 group">
      <input  {...register('rePassword')}  type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>

     {errors.rePassword && <Feedback msg = {errors.rePassword?.message}></Feedback>}

<div className="relative max-w-sm mb-8">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input {...register('dateOfBirth')} id="datepicker-title" datepicker datepicker-title="Flowbite datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>
     {errors.dateOfBirth && <Feedback msg = {errors.dateOfBirth?.message}></Feedback>}

<h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Gender</h3>
<ul className="flex gap-4 mb-6">
  <li>
    <label className="flex items-center gap-2 text-sm text-gray-900 dark:text-white">
      <input
        {...register('gender')}
        type="radio"
        value="male"
        className="w-4 h-4"
      />
      Male
    </label>
  </li>
  <li>
    <label className="flex items-center gap-2 text-sm text-gray-900 dark:text-white">
      <input
        {...register('gender')}
        type="radio"
        value="female"
        className="w-4 h-4"
      />
      Female
    </label>
  </li>
</ul>
     {errors.gender && <Feedback msg = {errors.gender?.message}></Feedback>}


  <p className="mb-5">do you sigin? <span> <NavLink to="/" className="nav-link text-purple-800 dark:text-blue-700">Login</NavLink>
</span></p>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
        </>
    )

}