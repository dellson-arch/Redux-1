import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      let res = await axios.post(
        "https://dummyjson.com/auth/login",
        credentials,
      );
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("login failed");
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  "auth/me",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      const res = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("failed to fetch user");
    }
  },
);
