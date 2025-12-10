import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const feedApi = createApi({
  reducerPath: "feed",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("Authorization", `bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFeed: builder.query({
      query: () => `api/posts/feed`,
    }),
  }),
});

export const { useGetFeed } = feedApi;
