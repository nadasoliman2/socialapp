import axios from "axios";
export async function getUserProfile(userId){
    const token = localStorage.getItem('token')

    const {data}= await axios.get(`https://linked-posts.routemisr.com/users/${userId}/posts?limit=2
`,{
        headers:{
            token
        }
    })
    return data
}