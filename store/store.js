import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import authsliceReducer from './slices/authslice';
import eventsliceReducer from './slices/eventslice';

const reduxStore=()=>configureStore({
    reducer:{
        auth:authsliceReducer,
        event:eventsliceReducer
    },
    devTools:true,
})
export const wrapper=createWrapper(reduxStore)