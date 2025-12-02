import { getUser } from "@/services/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await getUser(token);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
