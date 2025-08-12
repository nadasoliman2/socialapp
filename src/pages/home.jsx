import { getposts } from "../api/getposts.api"
import { useEffect } from "react";
import { useState } from "react";
import { Postitem } from "./postitem";
import { Loading } from "../Commponet/loading";
import Addpost from "../Commponet/addpost";
import {Helmet} from "react-helmet";

export  default function Home(){
  const [isLoading,setLoading]= useState(false);

  const[posts,setposts]=useState([]);
   async function getdata(){
    
  setLoading(true); 
    
  const res = await getposts();

  if(res.message === 'success')
    setposts(res.posts)
  console.log(posts)
  setLoading(false)
  }
  useEffect(()=>{
  getdata()
  },[])
  if (isLoading)
    return <Loading></Loading>
 return (
  <>
  <Helmet>
    <title>home</title>
    <meta name='description' content="Helmet application"></meta>
  </Helmet>
<Addpost></Addpost>
     { posts.map((data, index) => (
        <Postitem key={index} post={data} />
      ))
    }
  </>
)
}
