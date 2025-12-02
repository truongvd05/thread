import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API }),
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      headers.set("Authorization", `bearer ${token}`);
    }
    return headers;
  },
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `api/auth/user`,
    }),
  }),
});

export const { useGetUser } = userAPI;
