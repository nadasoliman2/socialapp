
import { formateDate } from "../formatdate"

export function CommentItem({comment}){
    
    const {content,commentCreator:{name,photo},createdAt}=comment
    return(
        <>
        
         <div className="flex items-center">
                
                <img src={photo} className="rounded-circle  size-[15px]"/>
                <div>
                    <p>{name}</p>
                   <span className="text-[gray]">{formateDate(createdAt)}</span>
               <p>{content}</p>
                </div>
                </div>
        </>
    )
}