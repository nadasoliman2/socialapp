import axios from 'axios';
export   async  function postlogin(dataform){
const {data} = await axios.post('https://linked-posts.routemisr.com/users/signin',dataform)
return data
}