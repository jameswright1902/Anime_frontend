import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.SERVER || "https://localhost:5173/anime",
  }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: () => "/anime",
    }),
  }),
});

export const { useGetAnimeQuery } = api;
