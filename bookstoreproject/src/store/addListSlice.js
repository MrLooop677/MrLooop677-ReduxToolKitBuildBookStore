import { createSlice } from "@reduxjs/toolkit";

const addListSlice=createSlice({
    name: 'addlist',
    initialState:{
        list:[],
    },
    reducers:{
        addList(state,action){
            state.list=action.payload
        }
    }
})
export const {addList}=addListSlice.actions
export default addListSlice.reducer