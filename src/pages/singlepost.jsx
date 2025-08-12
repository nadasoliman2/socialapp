import { useEffect, useState } from "react";
import { getsinglepost } from "../api/singlepost";
import { Postitem } from "./postitem"
import { useParams } from "react-router-dom";
import { Loading } from "../Commponet/loading";
export  function Singlepost(){
const [single,setsingle]= useState(null);
 const {id} = useParams();
   async  function getdata(){

    console.log(id)
      const res = await getsinglepost(id);
    
      if(res.message === 'success')
       setsingle(res.post)
      console.log(single)
     
      }
      useEffect(()=>{
      getdata()
      },[id])

    return(
        <>
     {single ? (
        <Postitem data={single} />
      ) : (
        <Loading></Loading>
      )}
    
    </>
    )
}