import { configureStore } from "@reduxjs/toolkit";
import addListSlice from "./addListSlice";
import authSlice from "./authSlice";
import sliceBook from "./bookSlice"
export const store=configureStore({
    reducer:{
        Books: sliceBook,
        auth:authSlice,
        list:addListSlice
    }
})