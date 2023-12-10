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
  tagTypes:["StudentDetailInterface"],
  endpoints: (builder) =>({
    // getStudentDetails==> this endpoint is for the read data
    getStudentsDetails: builder.query<StudentDetailInterface[], void>({
      // <first_one_is_what_response_we_are_getting_from_database, second_is_for_what_type_we_are_sending_to_database>
      // <response_type, request_type(payload_type)>
        query: () => "/studentsDetails",
        providesTags: ["StudentDetailInterface"],
      }),
      getStudentDetails: builder.query<StudentDetailInterface, string>({
        query: (id) => `/studentsDetails/${id}`,
        providesTags: ["StudentDetailInterface"],
      }),
    addStudentsDetails:builder.mutation<void, StudentDetailInterface>({
      query:(student)=>({
        url:"/studentsDetails",
        method:"POST",
        body:student
      }),
      invalidatesTags:["StudentDetailInterface"],
    }),
    deleteStudentsDetails: builder.mutation<void, string>({
      query: (id) => ({
        url: `/studentsDetails/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["StudentDetailInterface"],
    }),
    updateStudentsDetails: builder.mutation<void, StudentDetailInterface>({
      query: ({ id, ...rest }) => ({
        url: `/studentsDetails/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["StudentDetailInterface"],
    }),
  })
})

export const { useGetStudentsDetailsQuery,useAddStudentsDetailsMutation,useDeleteStudentsDetailsMutation,useUpdateStudentsDetailsMutation ,useGetStudentDetailsQuery} = studentDetailsApi;
