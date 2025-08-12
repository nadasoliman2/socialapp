import { useState } from "react";
import { createContext} from "react";
import { getUserData } from "../api/userdata.api";
import { useEffect } from "react";
 export const auth = createContext(null);
export function Authcontext({children}){
const [isLogin,setLogin]=useState('');
        const [userData,setuserData]= useState(null);
async  function getUserDataFun(){
        const res = await getUserData()
        setuserData(res.user)
    
        
    }
 useEffect(()=>{
    if(localStorage.getItem('token'))
        setLogin(localStorage.getItem('token'))
    getUserDataFun()
 })
    return(
<auth.Provider value={{isLogin,setLogin,userData}}>
    {children}
</auth.Provider>
    )
}