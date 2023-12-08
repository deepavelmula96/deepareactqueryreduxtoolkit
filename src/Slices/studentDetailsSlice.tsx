import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StudentDetailInterface } from "../Models/StudentDetailsModel";
// create api is for 

// createAPI –

// It’s a function provided by Redux Toolkit Querty that helps to create an API slice.

// fetch base query is for =================>base url witout endpoints =================
export const studentDetailsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6571c424d61ba6fcc0137e9d.mockapi.io",
    // prepareHeaders: (headers) => {
    //   headers.set("Access-Control-Allow-Headers", "*");
    // },
  }),
  endpoints: (builder) =>({
    getStudentsDetails: builder.query<StudentDetailInterface[], void>({
        query: () => "/studentsDetails",
      })
  })
})

export const { useGetStudentsDetailsQuery } = studentDetailsApi;