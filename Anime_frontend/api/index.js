import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER,
  }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: () => "/top/anime",
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/login",

        method: "POST",

        body: credentials,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/newuser",

        method: "POST",

        body: credentials,
      }),
    }),
  }),
});

export const { useGetAnimeQuery, useLoginMutation, useRegisterMutation } = api;
