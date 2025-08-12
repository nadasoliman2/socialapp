
import { useForm} from "react-hook-form"
import {zodResolver } from "@hookform/resolvers/zod";
import { loginshema } from "../shema/login.shema";
import { Feedback } from "../Commponet/feedback";
import { NavLink } from "react-router-dom"
import { postlogin } from "../api/login.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../context/auth.login";
import { useContext } from "react";
import { useEffect } from "react";
export default function  Login(){
      const {setLogin} = useContext(auth);
    
   const [error,setError]= useState('');
   const[loading, setLoading] = useState(false);
   const  navigate = useNavigate();
   const {handleSubmit , register,formState:{errors}}= useForm({
           resolver:zodResolver(loginshema),
           defaultValues:{
              
               email:'',
                password:'',
          
           },
              mode:'onChange'
          });

         async  function onSubmit(data){
           setLoading(true)
         try{

            const res = await postlogin(data)
         if(res.message === 'success'){
           setLoading(false);
           setError('');
           navigate('/home')
           localStorage.setItem('token',res.token)
        setLogin(res.token)
         } 
         }catch(error){
             setLoading(false)
             setError(error?.response?.data?.error);
         }
         }
         useEffect(()=>{
if(localStorage.getItem('token'))
  navigate('/home')
         },[navigate])
      
       return(
           <>
                  {error&& <Feedback msg={error}></Feedback>}
           
           <form className= "h-80  mt-28  w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto p-4 my-12" onSubmit={handleSubmit(onSubmit)}>
       
   
     
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
   
      <p className="mb-5">do you sigup? <span> <NavLink to="/register" className="nav-link text-purple-800 dark:text-blue-700">sigin up</NavLink>
</span></p>
     <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
   </form>
           </>
  
    )

}