import * as z from "zod";

export   const loginshema = z.object(
    {
          email:z.string().nonempty('this feild is required!').email('not vaild email'),
        password: z.string().nonempty('this field is required!')
          .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/, "password must include uppercase, lowercase, number and be at least 6 chars")
         
        })
    
