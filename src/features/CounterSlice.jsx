import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name : 'counter',
  initialState : {count : 0 } ,//take it as useState me jab hum koi default value dete the
  reducers : {
   increment : (state) => { //ye jo state hai ye tumhare initialState ko access kar sakta hai
    state.count += 1 
   },
   decrement : (state)=>{
    state.count -= 1
   }
  }
})
export let {increment , decrement} = counterSlice.actions
export default counterSlice.reducer

