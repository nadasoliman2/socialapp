

import axios from "axios";
export async function getcomments(id){
    const token = localStorage.getItem('token')
  const {data}= await axios.get(`https://linked-posts.routemisr.com/posts/${id}/comments`,{
        headers:{
            token
        }
    })
    return data
}