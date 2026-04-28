import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, loginUser } from "./actions/authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, //shayad kyuki abhi mere ko pata hai ki ek hi user aane wala hai
    isAuthenticated: false, //it's the thing jisse hum protected routes ko check karenge
    isLoading: true, //wo beech me fliker aa rahi thi usko resolve karne ke liye by default true kyu ki agar kuch nii aa raha toh loading hi aata rahe
  },
  reducers: {
    removeUser: (state) => {
      ((state.user = null),
        (state.isAuthenticated = false),
        (state.isLoading = false));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        ((state.user = action.payload),
          (state.isAuthenticated = true),
          (state.isLoading = false));
      })
      .addCase(loginUser.rejected, (state) => {
        ((state.user = null),
          (state.isAuthenticated = false),
          (state.isLoading = false));
      })

      
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      });
  },
});

export const { removeUser } = authSlice.actions;
export default authSlice.reducer;
