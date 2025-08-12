import { formateDate } from "../formatdate";
import {Link} from "react-router-dom";
import Comments from "./comments";
import { useContext, useState } from "react";
import { Createcomment } from "./CreateComment";
import { auth } from "../context/auth.login";
import { useMutation } from "@tanstack/react-query";
import { deletePost } from "../api/deletepost.api";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export function Postitem({post}){
const {userData} = useContext(auth);
    const [open,setopen] = useState(false);
              const queryClient = useQueryClient();

        const { body, image, user: { name, photo , _id:userId }, createdAt, _id, } = post;
 const {data, isPending ,mutate} = useMutation({mutationFn:deletePost,  
                 onSuccess:()=> {queryClient.invalidateQueries({queryKey:['posts']})}
})
    console.log(data)
    return(<>

      <div className="max-w-2xl mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
     {isPending&& toast('post is deleted')}

         <div className="flex items-center justify-between p-4">
            <div className="flex items-center p-4">
                <img src={photo} className="size-20 rounded-full mr-4" alt="User" />
                <div>
                    <p className="font-semibold">{name}</p>
                    <span className="text-[gray]">{formateDate(createdAt)}</span>
                </div>
            </div>
           
            {userId==userData?._id &&  <i onClick={()=>mutate(_id)} className="fa-solid fa-close fa-1x cursor-pointer"></i>}
            </div>
<Link  to={`/posts/${_id}`} >
                <img className="w-full" src={image} alt="Post" />
            </Link>

            <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {body}
                </p>

                <div className="flex justify-between fa-xl border-t border-b py-4">
                    <i className="fa-solid fa-share"></i>

                  
                    <i  onClick={()=>setopen(!open)}
                        className="fa-solid fa-comment cursor-pointer"
                       
                    ></i>

                    <i className="fa-solid fa-thumbs-up"></i>
                </div>
               
            </div>
         {open&&
         <>
         <Createcomment key={_id} id={_id}></Createcomment>
         <Comments key={_id} id={_id}></Comments>
         </>}
        </div>
    </>)
}