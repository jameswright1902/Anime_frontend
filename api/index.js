import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER || "https://localhost:5173/",
  }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetAnimeQuery } = api;
