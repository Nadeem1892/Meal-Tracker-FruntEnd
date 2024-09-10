import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

 export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/"}),
    tagTypes: ["users"],
    endpoints: (builder) => ({

    // login End point
    login:builder.mutation({
        query: ({email,password}) => ({
        url: "user/login",
        method:"POST",
        body: { email, password },
    })
    }),

    // login End point
      register:builder.mutation({
        query: ({name,email,age,weight,height,password,confirmPassword}) => ({
            url:"user/registerUser",
            maethod:"POST",
            body:{name,email,age,weight,height,password,confirmPassword}
     })
    }),
    })
 })

 export const {useLoginMutation} = authApi