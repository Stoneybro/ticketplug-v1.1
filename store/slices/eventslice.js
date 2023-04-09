 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosPrivate from "@/lib/axios";


 const initialState={
    events:[],
    loading:false,
    status:'',
    error:null
 }
 export const getEvent=createAsyncThunk('post/getEvent',async()=>{

 })
 export const createEvent=createAsyncThunk('posts/createEvent',async (details)=>{
   const response= await axiosPrivate.post('/create/event/',details)
   return response.data
 })
 export const createTicket=createAsyncThunk('posts/createTicket',async(ticket)=>{
   const response=await axiosPrivate.post('/create/event-ticket/',ticket)
   return response.data
 })
 const eventSlice=createSlice({
    name:'event',
    initialState,
    reducers:{
        
    },
    extraReducers(builder){
      builder
      .addCase(createEvent.fulfilled,(state,action)=>{
            state.status='event successfully created'
      })
      .addCase(createTicket.fulfilled,(state,action)=>{

      })
    }
 })

 export const allEvent=(state)=>state.event.events
 export const eventStatus=(state)=>state.event.status
 export const {}=eventSlice.actions
 export default eventSlice.reducer