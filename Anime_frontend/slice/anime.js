import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/index.js";

const animeSlice = createSlice({
  name: "anime",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAnime.matchFullfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default animeSlice.reducer;
