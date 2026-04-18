import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user : null, //shayad kyuki abhi mere ko pata hai ki ek hi user aane wala hai
    isAuthenticated : false,//it's the thing jisse hum protected routes ko check karenge
    isLoading : true //wo beech me fliker aa rahi thi usko resolve karne ke liye
  },
  reducers: {
    addUser: (state , action)=>{
        state.user = action.payload
        state.isAuthenticated = true
        state.isLoading = false
    },
    removeUser:(state)=>{
        state.user = null,
        state.isAuthenticated = false
    }
  }
})

export const { addUser,removeUser } = authSlice.actions
export default authSlice.reducer