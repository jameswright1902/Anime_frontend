import { createSlice } from "@reduxjs/toolkit";
import { api } from "../Anime_frontend/api/index.js";

const animeSlice = createSlice({
  name: "anime",
  initialState: { animes: [], anime: null },
  reducers: {
    createProductSuccess: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAnime.matchFullfilled,
      (state, { payload }) => {
        return { ...state, products: payload };
      }
    );
    builder.addMatcher(
      anime.endpoints.getProduct.matchFulfilled,
      (state, { payload }) => {
        return { ...state, anime: payload };
      }
    );

    builder.addMatcher(
      anime.endpoints.updateProduct.matchFulfilled,
      (state, { payload }) => {
        console.log("hit");
        return {
          ...state,
          products: state.products.map((anime) => {
            if (anime.id === payload.anime.id) {
              return payload.anime;
            }
            return anime;
          }),
        };
      }
    );
  },
});

export const { createProductSuccess } = animeSlice.actions;
export default animeSlice.reducer;
