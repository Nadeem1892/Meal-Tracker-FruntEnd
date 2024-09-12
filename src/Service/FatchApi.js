import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

 export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
        prepareHeaders: (headers) => {
        const token = localStorage.getItem("auth");
        if (token) {
            headers.set("x-access-token", token);
          }
          return headers;
        }
    }),
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
        query: (body) => ({
            url:"user/registerUser",
            method:"POST",
            body:body
     })
    }),

    // Add Meals
    addMael:builder.mutation({
        query: (mealDate) => ({
        url:"meal/add-meal",
        method:"POST",
        body:mealDate
        })
    })
    })
 })
 export const {useLoginMutation,useRegisterMutation,useAddMaelMutation} = authApi