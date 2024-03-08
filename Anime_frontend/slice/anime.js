import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/index.js";

const animeSlice = createSlice({
  name: "anime",
  initialState: {animes: [], anime: null},
  reducers: {
    createProductSuccess: (state, action) => {
      state.products.push(action.payload);
    },

  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAnime.matchFulfilled,
      (state, { payload }) => {
        return { ...state, products: payload };
      }
    );
    
  },
});

export const { createProductSuccess } = animeSlice.actions;
export default animeSlice.reducer;
  


