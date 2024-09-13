import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.21:3000/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("auth");
      if (token) {
        headers.set("x-access-token", token);
      }
      return headers;
    },
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    // login End point
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "user/login",
        method: "POST",
        body: { email, password },
      }),
    }),

    // login End point
    register: builder.mutation({
      query: (body) => ({
        url: "user/registerUser",
        method: "POST",
        body: body,
      }),
    }),

    // Add Meals
    addMael: builder.mutation({
      query: (mealDate) => ({
        url: "meal/add-meal",
        method: "POST",
        body: mealDate,
      }),
    }),
    getMealByDate: builder.mutation({
      query: (date) => ({
        url: `meal/get-meals/${date}`,
        method: "GET",
      }),
    }),

    getChallenge: builder.query({
      query: () => ({
        url: "challenges/getChallenges",
        method: "GET",
      }),
    }),
// daily update cghalllenge
    updateChallenge:builder.mutation({
        query: ({date,isChecked,challengeId}) =>({
            url: `challenges/updateDailyUpdate/${challengeId}`,
            method:"POST",
            body:{date,isChecked}
        })
    })
  }),
});
export const {
  useLoginMutation,
  useRegisterMutation,
  useAddMaelMutation,
  useGetMealByDateMutation,
  useGetChallengeQuery,
  useUpdateChallengeMutation
} = authApi;
