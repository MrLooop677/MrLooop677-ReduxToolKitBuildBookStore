import { createSlice } from "@reduxjs/toolkit";

const asuthSlice=createSlice({
    name: 'asuth',
    initialState:{
        islogIn:false,
        userName:"Eslam Mahmoud"
    },
    reducers:{
        logInOut(state){
            state.islogIn=!state.islogIn
        }
    }
})
export const {logInOut}=asuthSlice.actions
export default asuthSlice.reducer