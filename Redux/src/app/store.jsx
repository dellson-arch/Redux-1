import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CounterSlice'
//idhar sirf register karna hai
export const store = configureStore({
    reducer : {
     store : counterReducer
    }
})

