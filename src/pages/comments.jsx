import { useQuery } from '@tanstack/react-query'
import { getcomments } from '../api/getcomment.api'
import { CommentItem } from './commentitem'
export default function Comments({id}){

    const {data,isLoading,isError,error}= useQuery({queryKey:['comments',id,],queryFn:()=>getcomments(id)})
               

    if(isLoading)
        return <p>loading ...</p>

    if(isError)
            return <h2> {error.message}
            </h2>
  

    return(<>
  {data.comments.map(comment=><><CommentItem comment={comment} Key={comment._id}></CommentItem></>

  )}
    </>)
}