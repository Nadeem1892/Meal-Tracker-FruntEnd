import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

 export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/"}),
    tagTypes: ["users"],
    endpoints: (builder) => ({
    // login End point
    login:builder.mutation({
        query: () => ({

    })
    }),
      // login End point
    //   register:builder.mutation({
    //     query: () => ({

    //  })
    // }),
    })
 })