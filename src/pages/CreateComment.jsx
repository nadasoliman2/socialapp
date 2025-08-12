import { useMutation, useQuery } from "@tanstack/react-query"
import { createcomment } from "../api/createcomment.api"
import { useQueryClient } from "@tanstack/react-query";
export  function Createcomment({id}){
      const queryClient = useQueryClient();
    
//عشان هى post
const {isPending,data,mutate} = useMutation({mutationFn:createcomment,
      onSuccess:()=>queryClient.invalidateQueries({queryKey:['comments',id]})

})
 function addcommentFn(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault(); // يمنع النزول لسطر جديد
    mutate({ content: e.target.value, post: id });
    e.target.value = ''; // يمسح الكومنت بعد الإرسال
  }
}



    return(
        <>
        {isPending&&<h5>posting</h5>}
    
<form 
  className="p-5"
  onSubmit={(e) => {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة
  }}
>
  <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <div className="px-4 py-2  bg-white rounded-t-lg dark:bg-gray-800">
      <label htmlFor="comment" className="sr-only">Your comment</label>
      <textarea
        onKeyDown={addcommentFn}
        id="comment"
        rows="4"
        className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
        placeholder="Write a comment..."
        required
      ></textarea>
    </div>
    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
      <button
        type="button" // ← هنا بدل submit
        onClick={(e) => {
          const textarea = e.target.closest("form").querySelector("#comment");
          mutate({ content: textarea.value, post: id });
          textarea.value = "";
        }}
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
      >
        Post comment
      </button>
    </div>
  </div>
</form>


        </>
    )
}