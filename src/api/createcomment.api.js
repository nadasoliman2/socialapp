import axios from "axios";


export async function createcomment({content,post}){
        const token = localStorage.getItem('token');
        const {data} = await axios.post('https://linked-posts.routemisr.com/comments',
            {
                content,
               post
                
            }
            ,{    headers:{
            token
        }}
        )
     return data

}