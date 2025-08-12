import axios from "axios";


export async function createpost(formdata){
        const token = localStorage.getItem('token');
        const {data} = await axios.post('https://linked-posts.routemisr.com/posts',
            
              formdata
                
            
            ,{    headers:{
            token,
            'Content-Type':'multipart/form-data '
        }}
        )
     return data

}