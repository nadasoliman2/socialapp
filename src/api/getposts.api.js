

import axios from "axios";
export async function getposts(){
    const token = localStorage.getItem('token')
  const {data}= await axios.get('https://linked-posts.routemisr.com/posts?sort=-createdAt',{
        headers:{
            token
        }
    })
    return data
}