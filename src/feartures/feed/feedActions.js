import { getFeed } from "@/services/postService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeed = createAsyncThunk(
  "feed/fetchFeed",
  async ({ type, page, per_page }, { rejectWithValue }) => {
    try {
      return await getFeed(type, page, per_page);
    } catch (err) {
      return rejectWithValue(err.response?.data || "Lỗi server");
    }
  },
);
