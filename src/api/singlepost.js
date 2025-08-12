

import axios from "axios";
export async function getsinglepost(id){
    const token = localStorage.getItem('token')
  const {data}= await axios.get(`https://linked-posts.routemisr.com/posts/${id}`,{
        headers:{
            token
        }
    })
    return data
}