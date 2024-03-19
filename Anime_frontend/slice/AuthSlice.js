// // added this in to see if this would work with what we have and connect to registration form

// import { createSlice } from "@reduxjs/toolkit";

// // changed the import file location to my api/index in our file tree 
// import { api } from "../api/index";

// // Session storage key
// const TOKEN = "token";

// /**
//  * API endpoints
//  */
// const authApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: "auth/login",
//         method: "POST",
//         body: credentials,
//         responseHandler: (response) => response.text(),
//       }),
//       invalidatesTags: ["Me"],
//     }),
//     register: builder.mutation({
//       query: (credentials) => ({
//         url: "auth/register",
//         method: "POST",
//         body: credentials,
//       }),
//       invalidatesTags: ["Me"],
//     }),
//     logout: builder.mutation({
//       queryFn: () => ({ data: {} }),
//       invalidatesTags: ["Me"],
//     }),
//   }),
// });

// /**
//  * Stores the payload's token in both state and session storage.
//  */
// function storeToken(state, { payload }) {
//   if (typeof(payload) === "string") {
//     payload = JSON.parse(payload);
//   }
//   state.token = payload.token;
//   state.user = payload.user;
//   window.sessionStorage.setItem(TOKEN, payload.token);
// }

// /**
//  * Stores token whenever login or register succeeds
//  */
// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     token: window.sessionStorage.getItem(TOKEN),
//     user: {},
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
//     builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
//     builder.addMatcher(api.endpoints.logout.matchFulfilled, (state) => {
//       state.token = null;
//       window.sessionStorage.removeItem(TOKEN);
//     });
//   },
// });

// export default authSlice.reducer;

// export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
//   authApi;