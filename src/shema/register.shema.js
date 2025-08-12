import * as z from "zod";
export   const registershema = z.object(
    {
        name:z.string().nonempty('this feild is required!').min(2,'min length is 2 char').max(10,'max length 10 char'), 
          email:z.string().nonempty('this feild is required!').email('not vaild email'),
        password: z.string().nonempty('this field is required!')
          .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/, "password must include uppercase, lowercase, number and be at least 6 chars")
          , rePassword: z.string(),
           gender:z.enum(['female','male']),
            dateOfBirth: z.coerce.string()
        
        }).refine((data)=>data.password === data.rePassword,{
            path:['rePassword'],
            message:'not the same'
        }
        ) 
    
