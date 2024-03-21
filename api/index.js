import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL
  }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetAnimeQuery } = api;
