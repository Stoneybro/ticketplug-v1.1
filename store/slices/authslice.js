import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState={
    session:[]
}

export const authslice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setSession(state,action){
            state.session=action.payload
        }
    }
})

export const {setSession}=authslice.actions
export const selectSession=(state)=> state.auth.session
export default authslice.reducer
