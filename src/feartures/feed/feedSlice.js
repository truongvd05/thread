import { createSlice } from "@reduxjs/toolkit";
import { fetchFeed } from "./feedActions";

const initialState = {
  data: [],
  feedLoading: false,
  pagination: {
    per_page: 0,
    current_page: 0,
    last_page: 1,
  },
  error: null,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = [];
      state.pagination = { current_page: 0, last_page: 1 };
    },
    addFeed: (state, action) => {
      state.data.unshift(action.payload);
    },
    deleteSingerFeed: (state, action) => {
      state.data.shift();
    },
    updatePostHidden: (state, action) => {
      const { id, is_ghost } = action.payload;
      const post = state.data.find((item) => item.id === id);
      if (post) {
        post.is_ghost = is_ghost;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeed.pending, (state) => {
        state.feedLoading = true;
        state.error = null;
      })
      .addCase(fetchFeed.fulfilled, (state, action) => {
        state.feedLoading = false;
        const { data, pagination } = action.payload;
        state.data = data;
        state.pagination = pagination;
      })
      .addCase(fetchFeed.rejected, (state, action) => {
        state.feedLoading = false;
        state.error = action.payload || "lỗi không xác định";
      });
  },
});

export default feedSlice.reducer;

export const { clearData, addFeed, deleteSingerFeed, updatePostHidden } =
  feedSlice.actions;
