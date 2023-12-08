import { configureStore } from "@reduxjs/toolkit";
import { studentDetailsApi } from "../Slices/studentDetailsSlice";

export const store=configureStore({
    reducer:{
        // [e.target.name]:e.target.value
       [studentDetailsApi.reducerPath]:studentDetailsApi.reducer,     
    },
    middleware:(getDetaultMiddleware)=>(
        getDetaultMiddleware().concat(studentDetailsApi.middleware)
    )
})