import axios from 'axios';
export   async  function postresgister(dataform){
const {data} = await axios.post('https://linked-posts.routemisr.com/users/signup',dataform)
return data
}